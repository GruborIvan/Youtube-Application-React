import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBarComponent';
import VideoListComponent from './VideoListComponent';
import VideoPlayerComponent from './VideoPlayerComponent';
import useVideos from '../src/Hooks/useVideos';

const AppComponent = () => {

    // State of Component!
    const [selectedVideo, setSelectedVideo] = useState(null);

    // Custom hook!
    const [videos, search] = useVideos('Baka Prase');
    

    // Select first video from given!
    useEffect(() => {
        
    }, [videos]);


    const renderVideoDiv = () => {
        if (selectedVideo === null) {
            return (<div> </div>);
        }
        else {
            return (
                <div style={{float: 'left', marginLeft: 50}}>
                    <VideoPlayerComponent video={selectedVideo}/>
                </div>
                
            );
        }
    }

    return (
        <div>
            <div>
                <SearchBar onSubmit={ (term) => search(term) }/>
            </div>

            <div style={{overflow: 'hidden', marginTop: 20}}>

                    { renderVideoDiv() }

                <div style={{overflow: 'hidden'}}>
                    <VideoListComponent vidResults={videos} onVideoSelect={ setSelectedVideo} />
                </div>
                
            </div>  
        </div>
    );

};

export default AppComponent;