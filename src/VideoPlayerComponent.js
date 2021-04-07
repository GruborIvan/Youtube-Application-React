import React from 'react';

const VideoPlayerComponent = ({video}) => {

    const videoSrc = "https://youtube.com/embed/" + video.id.videoId;
    console.log(videoSrc);

    return (
        
        <div className="ui segment" style={{height: 200, width: 720}}> 
            
            <div className="ui embed" style={{height: 500,width:1000}}>
                <iframe  title="ytVideo" src={videoSrc}>

                </iframe>
            </div>
            
            <hr/>
        
            <h4 className="ui header"> {video.snippet.title} </h4>  
            <p> {video.snippet.description} </p>
        
        </div>

    );
    
};

export default VideoPlayerComponent;