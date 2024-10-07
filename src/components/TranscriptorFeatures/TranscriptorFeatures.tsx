
import Card from '../../ReusableComponents/Card/Card'
import './TranscriptorFeatures.css'
const TranscriptorFeatures = () => {
  return (
    <div className='transcriptor-feature-main'>



        <h3>Here's what you get:</h3>


        <div className='transcriptor-feature-cards'>

            <Card className='transcriptor-feature-card' title='Automatic summaries' description='AI analyzes the video content and extracts the key points.'/>
            <Card className='transcriptor-feature-card' title='Clear and concise' description='Summaries are easy to understand and capture the essence of the video.'/>
            <Card  className='transcriptor-feature-card' title='Improved reading efficiency' description='Quickly grasp the main ideas and remember more.'/>


        </div>


    </div>
  )
}

export default TranscriptorFeatures