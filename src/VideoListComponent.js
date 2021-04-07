import React from 'react';
import VideoItemComponent from './VideoItemComponent';

class VideoListComponent extends React.Component {

    onVideoSelected = (video) => {
        this.props.onVideoSelect(video);
    }

    render() {
        
        const videos = this.props.vidResults.map((video) => {
            console.log(video);
            return <VideoItemComponent key={video.id.videoId} content={video} clicked={this.onVideoSelected} />
        });

        return (
            <div className="ui raised text container segment" style={{padding: 15, width: 1000, backgroundColor: 'black'}}>
                {videos}
            </div>
        );
    }
  
}

export default VideoListComponent;