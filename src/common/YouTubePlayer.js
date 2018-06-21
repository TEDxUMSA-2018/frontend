import React from 'react';
import PropTypes from 'prop-types';

class YouTubePlayer extends React.Component {
    static proptypes = {
        videoId: PropTypes.string.isRequired,
        videoDescription: PropTypes.isRequired
    }

    constructor(props) {
        super(props);
        this.init();
        this.video = props.videoId;
        this.state = {
            isModalOpen: false,
            thumbnailUrl: ''
        }
    
        window['onYouTubeIframeAPIReady'] = e => {
            this.YT = window['YT'];
            this.reframed = false;
            this.player = new window['YT'].Player('playerContainer', {
                videoId: this.video,
                playerVars: {
                    controls: 0,
                    rel: 0
                },
                events: {
                    'onStateChange': this.onPlayerStateChange.bind(this),
                    'onError': this.onPlayerError.bind(this),
                    'onReady': this.onPlayerReady.bind(this)
                }
            });
        };
    }
    
    render() {
        return (
            <React.Fragment>
                { this._get_video_thumbnail() }
                { this._get_video_modal() }
            </React.Fragment>
        );
    }

    _get_video_thumbnail = () => {
        const {
            videoId,
            videoDescription
        } = this.props;
        return (
            <figure className="video image is-256x256">
                <img 
                    alt="vid"
                    className="vid-thumbnail"
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                />
                <div onClick={ this.openVideo } className="play-button"/>
                <div className="video-description">
                    <h2>{ videoDescription }</h2>
                </div>
            </figure>
        )
    }

    _get_video_modal = () => {
        const { isModalOpen } = this.state;
        const modalCls = isModalOpen ? 'is-active' : ''
        return (
            <div className={`modal ${modalCls}`}>
                <div 
                    onClick={ this.closeVideo }
                    className="modal-background stop-button"
                />
                <div className="modal-content" id="playerContainer" />
                <button 
                    onClick={ this.closeVideo }
                    className="modal-close is-large stop-button" 
                    aria-label="close" />
            </div>
        );
    }

    init() {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    onPlayerStateChange(event) {
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                if (this.cleanTime() === 0) {
                    console.log('started ' + this.cleanTime());
                } else {
                    console.log('playing ' + this.cleanTime())
                };
                break;
            case window['YT'].PlayerState.PAUSED:
                if (this.player.getDuration() - this.player.getCurrentTime() !== 0) {
                    console.log('paused @ ' + this.cleanTime());
                };
                break;
            case window['YT'].PlayerState.ENDED:
                console.log('ended ');
                break;
            default: break;
        };
    };
    
    onPlayerReady = e => {
        if (!this.reframed) {
            this.reframed = true;
        }
        const play = () => { this.player.playVideo() }
        const stop = () => { this.player.stopVideo() }

        var playButton = document.getElementsByClassName("play-button");
        for(let btn of playButton){
            btn.addEventListener("click", () => {
                play();
            });
        }

        var stopButton = document.getElementsByClassName("stop-button");
        for(let btn of stopButton){
            btn.addEventListener("click", () => {
                stop();
            });
        }
    }

    cleanTime() {
        return Math.round(this.player.getCurrentTime())
    };
    
    onPlayerError(event) {
        switch (event.data) {
            case 2:
                console.log('' + this.video)
                break;
            case 100:
                break;
            case 101 || 150:
                break;
            default: break;
        };
    };

    openVideo = () => {
        this.setState({
            isModalOpen: true
        })
    }

    closeVideo = () => {
        this.setState({
            isModalOpen: false
        })
    }
}

export default YouTubePlayer;