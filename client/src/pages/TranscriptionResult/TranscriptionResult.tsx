import useCombinedText from '../../hooks/useCombineText';
import './TranscriptionResult.css'
const TranscriptionResult = () => {
  const { combinedText } = useCombinedText();
 

  return (

    <div className='transcriptionResultMain'>

        <h1>Transcription Summary</h1>
        
      {
        combinedText!=='' ? 


        <div className='transcriptionSummary'>{combinedText}</div>:
        <span>No Text Found</span>
      }

    </div>
  );
};

export default TranscriptionResult;
