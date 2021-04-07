import {useState,useEffect} from 'react';
import Youtube from '../APIs/Youtube';

// Ovo je moj custom hook.
// To je prakticno funkcija koja nakon unosa termina za pretragu vraca rezultat pretrage.
const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    // Excecutes on initial render === componentDidMount!
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    // Submmitting search term!
    const search = async (defaultSearchTerm) => {
        
        const results = await Youtube.get('/search', {
            params: {
                q: defaultSearchTerm
            }
        });

        setVideos(results.data.items);
    }

    return [videos,search];
};

export default useVideos;