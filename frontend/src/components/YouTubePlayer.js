import React, { Component } from 'react';
import './YouTubePlayer.css';

class YouTubePlayer extends Component {

    componentDidMount() {
        getYouTubeIframeElement();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }

    render() {
        return (
            <div className="container">
                <iframe id="player" className="player" type="text/html" width="100%" height="100%"
                        src={`https://www.youtube.com/embed/${this.props.video}?autoplay=${this.props.autoplay}&mute=1&rel=${this.props.rel}&modestbranding=${this.props.modest}`}
                        frameBorder="0"
                        title="youtube"/>
            </div>
        );
    }
}

function getYouTubeIframeElement() {
    const iframe = document.getElementById('player');
    console.log('iframe:', iframe);
}

export default YouTubePlayer;