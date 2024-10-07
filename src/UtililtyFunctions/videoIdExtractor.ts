export const videoIdExtractor = (url: string): string | null => {
    try {
        const parsedUrl = new URL(url);
        
      
        if (parsedUrl.hostname === 'www.youtube.com' || parsedUrl.hostname === 'youtube.com') {
            return parsedUrl.searchParams.get('v');
        }
        // Check if it's a shortened YouTube URL
        else if (parsedUrl.hostname === 'youtu.be') {
            return parsedUrl.pathname.split('/').pop() || null; 
        } else {
            throw new Error('Invalid YouTube URL');
        }
    } catch (error) {
        console.error('Error extracting video ID:', error);
        return null; 
    }
};