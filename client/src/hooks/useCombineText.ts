import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';

const useCombinedText = () => {
  
  const summaryText = useSelector((state: RootState) => state.youtubeTranscript.transcript.summary);

 
  const combinedText = useMemo(() => summaryText || '', [summaryText]);


  const [displayedText, setDisplayedText] = useState('');
 
  const [isTextFullyDisplayed, setIsTextFullyDisplayed] = useState(false);

 
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + combinedText[currentIndex]);
      currentIndex += 1;

      if (currentIndex === combinedText.length) {
        clearInterval(interval);
        setIsTextFullyDisplayed(true); 
      }
    }, 30); 

    return () => clearInterval(interval); 
  }, [combinedText]);

  return { combinedText: displayedText, isTextFullyDisplayed };
};

export default useCombinedText;
