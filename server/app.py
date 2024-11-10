import os
import subprocess
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
import yt_dlp

# Initialize Flask app and CORS
app = Flask(__name__)
CORS(app)

# Define paths
AUDIO_PATH = 'audio'
CHUNK_PATH = 'chunks'

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Download audio from YouTube video
def download_audio(video_url):
    os.makedirs(AUDIO_PATH, exist_ok=True)
    logging.debug(f"Attempting to download audio from URL: {video_url}")

    ydl_opts = {
        'format': 'bestaudio/best',
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'wav',
            'preferredquality': '192',
        }],
        'outtmpl': os.path.join(AUDIO_PATH, 'audio.%(ext)s'),
        'noplaylist': True,
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([video_url])
        return os.path.join(AUDIO_PATH, 'audio.wav')
    except Exception as e:
        logging.error(f"Error downloading audio: {str(e)}")
        raise

# Split audio into 60-second chunks
def split_audio(input_audio):
    os.makedirs(CHUNK_PATH, exist_ok=True)
    command = [
        'ffmpeg', '-i', input_audio, '-f', 'segment', '-segment_time', '60',
        '-c', 'copy', os.path.join(CHUNK_PATH, 'chunk_%03d.wav')
    ]
    result = subprocess.run(command, stderr=subprocess.PIPE, text=True)

    if result.returncode != 0:
        logging.error(f"FFmpeg error: {result.stderr}")
        raise Exception("Error splitting audio into chunks")

    chunk_files = sorted([os.path.join(CHUNK_PATH, f) for f in os.listdir(CHUNK_PATH) if f.endswith('.wav')])
    return chunk_files

# Transcribe audio chunks using Hugging Face
def transcribe_audio_chunks(chunk_files):
    transcriber = pipeline('automatic-speech-recognition', model='openai/whisper-base')
    transcriptions = []
    
    for chunk in chunk_files:
        transcription = transcriber(chunk, return_timestamps=True)['text']
        transcriptions.append(transcription)
        
    return transcriptions

# Summarize text using Hugging Face
def summarize_texts(transcriptions):
    summarizer = pipeline('summarization', model='facebook/bart-large-cnn')
    summaries = []
    
    for text in transcriptions:
        summary = summarizer(text, max_length=130, min_length=30, do_sample=False)
        summaries.append(summary[0]['summary_text'])
        
    return summaries

# Combine summaries into a single summary
def combine_summaries(summaries):
    return ' '.join(summaries)

@app.route('/summarize', methods=['POST'])
def summarize():
    logging.debug("Received a request on /summarize")
    
    try:
        video_url = request.json['video_url']
        audio_path = download_audio(video_url)
        chunk_files = split_audio(audio_path)
        transcriptions = transcribe_audio_chunks(chunk_files)
        summaries = summarize_texts(transcriptions)
        final_summary = combine_summaries(summaries)

        return jsonify({'summary': final_summary}), 200
    except Exception as e:
        logging.error(f"An error occurred: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
