import { useEffect, useState } from 'react'
import TranscriptorAdditionalFeatures from '../../components/TranscriptorAdditionalFeatures/TranscriptorAdditionalFeatures'
import TranscriptorFeatures from '../../components/TranscriptorFeatures/TranscriptorFeatures'
import TranscriptorReminder from '../../components/TranscriptorReminder/TranscriptorReminder'
import TranscriptorRunSteps from '../../components/TranscriptorRunSteps/TranscriptorRunSteps'
import TranscriptSearchBar from '../../components/TranscriptSearchBar/TranscriptSearchBar'
import Card from '../../ReusableComponents/Card/Card'
import './Home.css'
import { YoutubeTranscript, TranscriptResponse } from 'youtube-transcript'; 

const Home = () => {
    const [transcript, setTranscript] = useState<TranscriptResponse>([]);
    const videoId = 'https://www.youtube.com/watch?v=cQxw6aZ2c6s'; 

    useEffect(() => {
        const fetchTranscript = async () => {
            try {
                const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
                setTranscript(transcriptData);
            } catch (error) {
                console.error('Error fetching transcript:', error);
            }
        };

        fetchTranscript();
    }, [videoId]);
    

    return (
        <div className='homeMain'>


            <Card title='NewGen Youtube Summarizer' description='Our free online YouTube Summarizer automatically generates concise summaries of any video, saving you valuable time and energy
'  className='titleCard'/>

        <TranscriptSearchBar/>
        <TranscriptorRunSteps/>
        <Card className='transcripor-description' title='+ 100 Million Minutes of Videos Summarized' description='Harnessing the power of AI we ve summarized millions of videos unlocking unparalleled insights and empowering individuals with knowledge like never before.' />

        <TranscriptorFeatures/>
        <TranscriptorAdditionalFeatures/>
        <TranscriptorReminder/>



        

        </div>


    )
}

export default Home