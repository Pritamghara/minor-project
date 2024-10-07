import SearchBar from "../../ReusableComponents/SearchBar/SearchBar"


import './TranscriptSearchBar.css'

const TranscriptSearchBar = () => {

    
    const handleSearch=()=>{
        console.log('hello')

    }
  return (
   
   <div  className="transcriptSearchBar">

    <SearchBar onSearch={handleSearch}/>
   </div>
  )
}

export default TranscriptSearchBar