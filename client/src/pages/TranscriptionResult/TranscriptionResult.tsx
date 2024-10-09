import useCombinedText from '../../hooks/useCombineText';
import './TranscriptionResult.css'
const TranscriptionResult = () => {
  const { combinedText } = useCombinedText();

  return (

    <div className='transcriptionResultMain'>

        <h1>Transcription Summary</h1>
        
        <div className='transcriptionSummary'>{combinedText}</div>
    </div>
  );
};

export default TranscriptionResult;
