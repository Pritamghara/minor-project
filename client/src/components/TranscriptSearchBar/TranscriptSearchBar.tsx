import { useDispatch } from "react-redux";
import SearchBar from "../../ReusableComponents/SearchBar/SearchBar"
import { videoIdExtractor } from "../../UtililtyFunctions/videoIdExtractor";


import './TranscriptSearchBar.css'
import { fetchYoutubeTranscript } from "../../redux/features/youtubeTranscript/youtubeTranscriptSlice";
import { AppDispatch } from "../../redux/app/store";
import { useNavigate } from "react-router-dom";

const TranscriptSearchBar = () => {

  const dispatch=useDispatch<AppDispatch>()

  const navigate=useNavigate();

    
    const handleSearch=async(videoUrl:string)=>{
        

        try {
          
          const response=await dispatch(fetchYoutubeTranscript(videoUrl))

          if(response){

            navigate('/transcription')
          }
        } catch (error) {
          
        }
        
        
    };

    
  return (
   
   <div className="transcriptSearchBar">

    <SearchBar onSearch={handleSearch}/>
   </div>
  )
}

export default TranscriptSearchBar