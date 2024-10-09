import axiosInstance from "./fetchVideoTranscript";

// Function to fetch captions for a specific video ID
const fetchCaptions = async (videoId:string) => {
  try {
    // Make sure to use the correct endpoint
    const response = await axiosInstance.get(`/${videoId}/captions`, {
      params: {
        // Add any query parameters if needed
        lang: 'en' // Optional: specify the language
      },
    });
    
    // Check if the response contains valid data
    if (response.status === 200) {
      console.log('Captions fetched successfully:', response.data);
      return response.data; // Return the fetched captions data
    } else {
      console.error('Failed to fetch captions:', response.statusText);
      return null;
    }
  } catch (error) {
    console.error('Error fetching captions:', error);
    return null;
  }
};

export default fetchCaptions;
