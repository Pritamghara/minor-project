
import Button from '../../ReusableComponents/Button/Button';
import Card from '../../ReusableComponents/Card/Card'
import './TRanscriptorReminder.css'

import { LuAlarmClock } from "react-icons/lu";
const TranscriptorReminder = () => {

    const handleTranscriptorReminder=()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth' ,
           
        });
    }
  return (
    <div className='transcriptor-reminder-main'>



        <Card className='transcriptor-reminder-card' titleIcon={<LuAlarmClock/>} title='Get instant summaries for any YouTube video in just a few seconds! ' description='Stop wasting time and start learning more effectively with AI Summarization! '/>

        <Button onClick={handleTranscriptorReminder} className='reminder-button' text='Try now'/>
    </div>
  )
}

export default TranscriptorReminder