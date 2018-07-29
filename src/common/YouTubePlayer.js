import React, { Component, Fragment } from 'react';
import Lightbox from 'lightbox-react';

const VideoIframe = ({ videoId, videoTitle }) => (
    <iframe 
        title={videoTitle} 
        width="560" 
        height="315" 
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen
        style={{
            maxWidth: '100%',
            position: 'absolute',
            left: 0,
            right: 0,
            margin: 'auto',
            top: '50%',
            transform: 'translateY(-50%)'
        }} 
    />
)

class YouTubePlayer extends Component {
    state = {
        isOpen: false
    }
    static defaultProps = {
        imageName: 'hqdefault'
    }
    render() {
        const {videoId, videoTitle} = this.props;
        const {isOpen} = this.state;
        return (
            <Fragment>
                { this.renderVideoThumbnail() }
                { isOpen && 
                    <Lightbox
                        mainSrc={<VideoIframe videoId={videoId} videoTitle={videoTitle} />}
                        onCloseRequest={this.closeModal}
                        enableZoom={false}
                        mainSrcThumbnail={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                    /> 
                }
            </Fragment>
        );
    }

    renderVideoThumbnail = () => {
        const {
            imageName,
            videoId,
            videoTitle
        } = this.props;
        return (
            <figure className="video image is-256x256" onClick={this.openModal}>
                <div className="vid-thumbnail-container">
                    <img 
                        alt="vid"
                        className="vid-thumbnail"
                        src={`https://img.youtube.com/vi/${videoId}/${imageName}.jpg`} 
                    />
                    <div onClick={ this.openVideo } className="play-button"/>
                </div>
                <div className="video-description">
                    <h2>{ videoTitle }</h2>
                </div>
            </figure>
        )
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }
}

export { YouTubePlayer };