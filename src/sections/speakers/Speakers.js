import React from 'react';
import { PersonCard, YouTubePlayer } from '../../common';

const messages = [
    "Estamos buscando a los mejores expositores",
    "Seguimos escogiendo las mejores ideas"
];

const SPEAKERS_2017 = [{
    name: 'Miguel Angel Figueroa',
    videoTitle: 'Emprendimientos de 1 centavo',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'dcXMT7nrOh0',
    imageName: 'hqdefault'
}, {
    name: 'Jazmin Quiroz',
    videoTitle: 'Los murciélagos: nuestros primos invisibles',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 's_d6HFkEvp0'
}, {
    name: 'Carlos Guaipatin',
    videoTitle: 'Innovación social: muchas definiciones, un ejemplo',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: '94URYsTz0P0'
}, {
    name: 'Alex Ayala',
    videoTitle: 'La vida de las cosas',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 'MOZ4INiFktM'
}, {
    name: 'Marco Antonio Quelca',
    videoTitle: 'La memoria en una cocina',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: '-rwPzK9duAQ'
}, {
    name: 'Jorge Lopez',
    videoTitle: 'La economía del saber',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 'CsSVvSKPdBE',
    imageName: 'hqdefault'
}, {
    name: 'Carla Maldonado',
    videoTitle: '¿Puede la modernidad científica obviar el conocimiento tradicional?',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'a_9bUvkCMu0', 
    imageName: 'hqdefault'
}, {
    name: 'Sergio Caballero',
    videoTitle: '¿Por qué realmente todo es mejor con una cebra?',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 'zgbn6PUTtHs'
}, {
    name: 'Juan Sebastian Osorio',
    videoTitle: 'Soluciones en salud global con colaboración y tecnología',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'a-yq8a-tfZU'
}, {
    name: 'Alina Santander',
    videoTitle: '3, 2, 1 ¡Despegue! Nos elevamos levantando a otros',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: '7Ljr5k7GonU'
}, {
    name: 'Leonardo Viscarra',
    videoTitle: '¡Si se puede!',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'kKigUgJZ4tM'
}, {
    name: 'Mohammed Viscarra',
    videoTitle: 'Repensando el cerebro',
    imageURL: 'images/speakers/2017/hermann.png',
    videoId: 'J55SiFqW3nU'
}, {
    name: 'Richard Mateos',
    videoTitle: 'La discapacidad no existe, existe la diversidad',
    imageURL: 'images/speakers/2017/andres.png',
    videoId: 'MtwK8YBWvvM'
}];

const SPEAKERS_2018 = [{
    name: 'Ariel Amaru',
    videoTitle: '',
    imageURL: 'images/speakers/2018/ArielAmaru1.png',
    videoId: ''
}, {
    name: 'Carlos Jordan',
    videoTitle: '',
    imageURL: 'images/speakers/2018/CarlosJordan2.png',
    videoId: ''
}, {
    name: 'Giovanna Almanza',
    videoTitle: '',
    imageURL: 'images/speakers/2018/GiovannaAlmanza1.png',
    videoId: ''
}, {
    name: 'Guide Choquetanga',
    videoTitle: '',
    imageURL: 'images/speakers/2018/GuideChoquetanga2.png',
    videoId: ''
}, {
    name: 'Gustavo Orihuela',
    videoTitle: '',
    imageURL: 'images/speakers/2018/GustavoOrihuela1.png',
    videoId: ''
}, {
    name: 'Mauricio Dulon',
    videoTitle: '',
    imageURL: 'images/speakers/2018/MauricioDulon2.png',
    videoId: ''
}, {
    name: 'Miguel Carpio',
    videoTitle: '',
    imageURL: 'images/speakers/2018/MiguelCarpio1.png',
    videoId: ''
}, {
    name: 'Sofia Mendez',
    videoTitle: '',
    imageURL: 'images/speakers/2018/SofiaMendez2.png',
    videoId: ''
}, {
    name: 'Susana Condori',
    videoTitle: '',
    imageURL: 'images/speakers/2018/SusanaCondori1.png',
    videoId: ''
}]

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
                                        description={speaker.title}
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