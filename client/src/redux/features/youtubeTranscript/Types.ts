type YoutubeTranscriptStateType= {
    transcript: TranscriptItemType[];
    loading: boolean;
    error: string | null;
  }




  export type TranscriptItemType= {
    text: string;
    start: number;
    duration: number;
  }


export default YoutubeTranscriptStateType