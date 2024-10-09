import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { YoutubeTranscriptInitialState } from './youtubeTranscriptInitialState'
import { TranscriptItemType } from './Types';

export const fetchYoutubeTranscript = createAsyncThunk(
  'youtubeTranscript/fetchTranscript',
  async (videoId: string) => {
    const response = await fetch(`http://127.0.0.1:5000/transcripts?vid=${videoId}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch transcript');
    }

    const data = await response.json();
    return data; 
  }
);
export const youtubeTranscriptSlice = createSlice({ 
  name: 'youtubeTranscript',
  initialState:YoutubeTranscriptInitialState,
  reducers: {
    // Add additional reducer cases if needed here
  },
  extraReducers: (builder) => {
    builder.addCase(fetchYoutubeTranscript.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchYoutubeTranscript.fulfilled, (state, action: PayloadAction<TranscriptItemType[]>) => {
      state.transcript = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchYoutubeTranscript.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch transcript';
    });
  },
});


export default youtubeTranscriptSlice.reducer;