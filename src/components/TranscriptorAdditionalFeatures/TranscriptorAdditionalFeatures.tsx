import Card from '../../ReusableComponents/Card/Card'
import './TranscriptorAdditionalFeatures.css'
const TranscriptorAdditionalFeatures = () => {
  return (
    <div className="transcriptor-additional-features-main">
        <h3>Here's why you'll love our AI Summarizer:</h3>

        <div className='transcriptor-additional-features-cards'>

            <Card className='transcriptor-additional-features-card' title='Saves you valuable time' description='by eliminating the need to watch hours of videos.'/>
            <Card className='transcriptor-additional-features-card' title='Improves your learning efficiency' description='by providing a concise overview of complex topics.'/>
            <Card className='transcriptor-additional-features-card' title='Gives you a better understanding of trending discussions' description='by focusing on the most relevant parts of the video.'/>
        </div>
    </div>
  )
}

export default TranscriptorAdditionalFeatures