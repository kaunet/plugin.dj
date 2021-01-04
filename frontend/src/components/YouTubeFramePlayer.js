import React, { Component } from 'react';
import './YouTubePlayer.css';

class YouTubePlayer extends Component {

    constructor(props) {
        super(props);
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        window['onYouTubeIframeAPIReady'] = (e) => {
            console.log('onYouTubeIframeAPIReady');
            this.player = new window.YT.Player('player', {
                height: '360',
                width: '640',
                videoId: 'M7lc1UVf-VE',
                events: {
                    onReady: this.onPlayerReady.bind(this),
                    onStateChange: this.onPlayerStateChange.bind(this)
                }
            });
            window['yp'] = this.player;
        };
    }

    componentDidMount() {
        //
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps;
    }

    render() {
        return (
            <div id="player"></div>
        );
    }

    // YouTube IFrame API
    onPlayerReady(event) {
        console.log('onPlayerReady:', event);
        //event.target.playVideo();
        //this.done = false;
        //event.target.loadVideoById({videoId: 'mYFaghHyMKc'});
    }

    onPlayerStateChange(event) {
        console.log('onPlayerStateChange:', event.data);
        /*
        YT.PlayerState.ENDED        - 0
        YT.PlayerState.PLAYING      - 1
        YT.PlayerState.PAUSED       - 2
        YT.PlayerState.BUFFERING    - 3
        YT.PlayerState.CUED         - 5
        */
        if (event.data === -1) {
            event.target.playVideo();
        }

        /*
        if (event.data === window.YT.PlayerState.PLAYING && !this.done) {
            setTimeout(this.stopVideo.bind(this), 3000);
            this.done = true;
        }*/
    }

    stopVideo() {
        console.log('stopVideo:');
        this.player.stopVideo();
    }
}

export default YouTubePlayer;