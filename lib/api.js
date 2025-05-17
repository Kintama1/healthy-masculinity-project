import client from './contentful';

export async function getBlogWebsite() {
    if (!client) {
        console.error("Contentful client is not initialized");
        return null;
    }
    try {
        // Get specific entry by ID
        const response = await client.getEntry('upAmRC5BlbGJ2vCPm7F5P');
        
        // Return the entry directly
        return response;
    }
    catch (error) {
        console.error("Error fetching blog website data:", error);
        return null;
    }
}