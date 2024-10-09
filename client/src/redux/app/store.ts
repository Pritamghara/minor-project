import { configureStore } from '@reduxjs/toolkit'
import youtubeTranscriptReducer from '../features/youtubeTranscript/youtubeTranscriptSlice'
export const store = configureStore({
  reducer: {

    youtubeTranscript: youtubeTranscriptReducer
    ,
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch