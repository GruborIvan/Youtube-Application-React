import axios from 'axios';

//const KEY = "AIzaSyCZoo3zeJRYCxT3hgnjC4Pd8chPrQyBbGE";
//const KEY2 = "AIzaSyA31TEeA6A7terhYlcYL1FNn2UwCECc1wo";
const KEY3 = "AIzaSyD6d_PiPhkcDByU8q4AyxdBC19Pq99B6hM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY3
    }
});

