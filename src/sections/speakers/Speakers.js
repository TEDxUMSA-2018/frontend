import React from 'react';

import { PersonCard, YouTubePlayer } from '../../common';

const messages = [
    "Estamos buscando a los mejores expositores",
    "Seguimos escogiendo las mejores ideas",

]

const SPEAKERS_2017 = [{
    name: 'Miguel Angel Figueroa',
    title: 'Emprendimientos de 1 centavo',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'dcXMT7nrOh0'
}, {
    name: 'Jazmin Quiroz',
    title: 'Los murciélagos: nuestros primos invisibles',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 's_d6HFkEvp0'
}];
// const SPEAKERS_2017 = [{
//     name: 'Miguel Angel Figueroa',
//     title: 'Emprendimientos de 1 centavo',
//     imageURL: 'images/speakers/2017/andres.png',
//     videoId: 'dcXMT7nrOh0'
// }, {
//     name: 'Jazmin Quiroz',
//     title: 'Los murciélagos: nuestros primos invisibles',
//     imageURL: 'images/speakers/2017/hermann.png',
//     videoId: 's_d6HFkEvp0'
// }, {
//     name: 'Carlos Guaipatin',
//     title: 'Innovación social: muchas definiciones, un ejemplo',
//     imageURL: 'images/speakers/2017/andres.png',
//     videoId: '94URYsTz0P0'
// }, {
//     name: 'Alex Ayala',
//     title: 'La vida de las cosas',
//     imageURL: 'images/speakers/2017/hermann.png',
//     videoId: 'MOZ4INiFktM'
// }, {
//     name: 'Marco Antonio Quelca',
//     title: 'La memoria en una cocina',
//     imageURL: 'images/speakers/2017/andres.png',
//     videoId: '-rwPzK9duAQ'
// }, {
//     name: 'Jorge Lopez',
//     title: 'La economía del saber',
//     imageURL: 'images/speakers/2017/hermann.png',
//     videoId: 'CsSVvSKPdBE'
// }, {
//     name: 'Carla Maldonado',
//     title: '¿Puede la modernidad científica obviar el conocimiento tradicional?',
//     imageURL: 'images/speakers/2017/andres.png',
//     videoId: 'a_9bUvkCMu0'
// }];

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
                <section className="version18 hero is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <img src="/images/magnify.svg" alt="https://loading.io"/>
                            <h1 className="title messages">{messages[0]}</h1>
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
                                    <PersonCard
                                        key={`speaker17-${index}`}
                                        imageURL={speaker.imageURL}
                                        name={speaker.name}
                                        description={speaker.title}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="version17 hero is-fullheight has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                {SPEAKERS_2017.map((speaker, index) => (
                                    <div className="column is-3" key={`speaker18-${index}`}>
                                        <YouTubePlayer
                                            videoId={speaker.videoId}
                                            videoDescription={speaker.title}
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