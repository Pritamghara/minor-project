import useCombinedText from '../../hooks/useCombineText';
import './TranscriptionResult.css';
import { HiSpeakerWave } from "react-icons/hi2";
import { FaCopy } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TranscriptionResult = () => {
  const { combinedText, isTextFullyDisplayed } = useCombinedText();

  const handleSpeakText = () => {
    if (isTextFullyDisplayed && combinedText) {
      toast.success("Audio is playing!"); 
      const utterance = new SpeechSynthesisUtterance(combinedText);
      utterance.rate = 0.5;
      utterance.pitch = 0.5;
      utterance.volume = 0.4;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCopyText = () => {
    if (combinedText) {
      navigator.clipboard.writeText(combinedText)
        .then(() => {
          toast.success("Text copied to clipboard!");
        })
        .catch(() => {
          toast.error("Failed to copy text.");
        });
    }
  };

  return (
    <div className='transcriptionResultMain'>
      <div className='transcriptionHeader'>
        <h1>Transcription Summary</h1>
        <div className='transcriptorActions'>
          <HiSpeakerWave 
            className={`transcriptorActionButtons ${!isTextFullyDisplayed ? 'disabled' : ''}`}
            onClick={handleSpeakText}
          />
          <FaCopy 
            className={`transcriptorActionButton2 ${!isTextFullyDisplayed ? 'disabled' : ''}`}
            onClick={handleCopyText}
          />
        </div>
      </div>
      {combinedText !== '' ? 
        <div className='transcriptionSummary'>{combinedText}</div> :
        <span>No Text Found</span>
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TranscriptionResult;
