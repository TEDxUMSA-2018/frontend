import React from 'react';
import { PersonCard, YouTubePlayer } from '../../common';
import { SPEAKERS_2017, SPEAKERS_2018 } from '../../constants/speakers';

const messages = [
    "Estamos buscando a los mejores expositores",
    "Seguimos escogiendo las mejores ideas"
];

export default class Speakers extends React.Component{
    render(){
        return (
            <div className="speakers-page">
                <section className="version18 hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="year current title is-size-1-desktop is-size-2-mobile">
                                2018
                            </h1>
                        </div>
                    </div>
                </section>
                {/* <section className="version18 hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src="/images/magnify.svg" alt="https://loading.io"/>
                            <h1 className="title messages">{messages[0]}</h1>
                        </div>
                    </div>
                </section> */}
                <section className="version18 hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                {SPEAKERS_2018.map( (speaker, index) => (
                                    <PersonCard
                                        key={`speaker18-${index}`}
                                        imageURL={speaker.imageURL}
                                        name={speaker.name}
                                        description={speaker.videoTitle}
                                        colWidth={4}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="version17 hero is-fullheight has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="year past title is-size-1-desktop is-size-2-mobile">
                                2017
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="version17 hero is-fullheight has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                {SPEAKERS_2017.map( (speaker, index) => (
                                    <div className="column is-3" key={`speaker-vid-${index}`}>
                                        <YouTubePlayer 
                                            videoId={speaker.videoId}
                                            videoTitle={speaker.videoTitle}
                                            imageName={speaker.imageName}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}