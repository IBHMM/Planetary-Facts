import axios from 'axios';

export async function TakeData() {
    
    const Req = await Request();

    return Req;
    
}

async function Request() {
    try {
        const response = await axios.get('../src/planets/data/data.json'); 
        return response.data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

