
import { useState, useEffect } from 'react';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/app/store';
import { TranscriptItemType } from '../redux/features/youtubeTranscript/Types';

const useCombinedText = () => {
  const transcriptionArray = useSelector((state: RootState) => state.youtubeTranscript.transcript);

  // Combine all text into one string
  const combinedText = useMemo(() => {
    return transcriptionArray.map((item: TranscriptItemType) => item.text).join(' ');
  }, [transcriptionArray]);

  // State to hold the gradually revealed text
  const [displayedText, setDisplayedText] = useState('');

  // Effect to gradually add text to the div
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText((prevText) => prevText + combinedText[currentIndex]);
      currentIndex += 1;
      if (currentIndex === combinedText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust the speed (50ms delay between characters)

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [combinedText]);

  return { combinedText: displayedText }; // Return the progressively revealed text
};

export default useCombinedText;
