import React, { Component } from 'react';
import { ReactPlayer } from 'react-player';

import '../css/VideoPlayer.css';


class VideoPlayer extends Component{
    handleEnded = () => {
        console.log('video Ended');
    }
    render(){
        const videoUrl = "https://youtu.be/kJieF-DsQVY";
        const imageSrc = "./images/Fast_large.jpg";
        return(
            <div className="videoPlayer">
                <ReactPlayer
                    url={this.props.videoUrl}
                    controls
                    playing={false}
                    width="100%"
                    height="100%"
                    style={{position: "absolute", top: "0", left:"0"}}
                    light={this.props.imageUrl}
                    onEnded={this.handleEnded}
                />
            </div>
        )
    }
}

export { VideoPlayer };