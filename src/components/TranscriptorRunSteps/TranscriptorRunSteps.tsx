
import { AiOutlineThunderbolt } from "react-icons/ai";
import Card from '../../ReusableComponents/Card/Card'
import './TranscriptorRunSteps.css'
import { PiNotebook } from "react-icons/pi";
import { FaDownload } from "react-icons/fa6";
const TranscriptorRunSteps = () => {
  return (
    <div className='transcriptor-run-steps-main'>

        <Card className='steps' title='1. Paste the YouTube video link
into our platform.' icon={<PiNotebook />}/>
        <Card className='steps' icon={<AiOutlineThunderbolt />}  title='2. Sit back and watch AI work its magic.'/>
        <Card className='steps' icon={<FaDownload/>} title='3. Your instant video summary
will appear!'/>




    </div>
  )
}

export default TranscriptorRunSteps