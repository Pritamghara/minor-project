from typing import  Any

from fastapi import FastAPI, Query
from youtube_transcript_api import YouTubeTranscriptApi

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allows all headers
)

@app.get('/transcripts', response_model=Any)
async def generate_transcripts(
    vid: str = Query(..., description = 'Video ID')
):
    
    return YouTubeTranscriptApi.get_transcript(vid)