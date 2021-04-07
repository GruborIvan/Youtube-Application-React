import React from 'react';

const VideoItemComponent = (props) => {

    return (
        <div style={{paddingTop: 15, width: 660, backgroundColor: 'AliceBlue'}} className="ui raised text container segment" onClick={ () => props.clicked(props.content)}> 

            <div>
                <h3> {props.content.snippet.title} </h3> 
            </div>

            <div  style={{overflow: 'hidden'}}>
                <div style={{float: 'left'}}>
                    <img src={props.content.snippet.thumbnails.medium.url} alt="No img" style={{marginTop: 10}} />
                </div>

                <div style={{overflow: 'hidden', paddingLeft: 20, paddingTop: 20}}>
                    <h5> Channel title: {props.content.snippet.channelTitle} </h5>
                    <h5> Description:   {props.content.snippet.description} </h5>
                    <p> Release date: { props.content.snippet.publishTime} </p>
                </div>
            </div>
            
        </div>
    );

};

export default VideoItemComponent;