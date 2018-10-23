import React from 'react';
import { PersonCard } from '../../common';
import { TEAM } from "./teamList";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const EVENT_IMAGES = Array(10);
EVENT_IMAGES.fill('foto', 0, 10);

export default class Team extends React.Component{
    render() {
        return (
            <div className="team-page">
                <section className="hero is-fullheight">
                    <Slider 
                        className="slider-wrapper"
                        autoplay={2000}
                    >
                        {EVENT_IMAGES.map((item, index) => (
                            <div
                                key={index}
                                className={`slider-content image-${index + 1}`}
                            />
                        ))}
                    </Slider>
                </section>
                <section className="hero is-fullheight has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns is-multiline">
                                {TEAM.map( (person, index) => (
                                    <PersonCard
                                        key={`team-${index}`}
                                        imageURL={index % 2 === 0 ? `${person.imageURL}bw.jpg` : `${person.imageURL}rw.jpg`}
                                        name={person.name}
                                        description={person.job}
                                        lead={false}
                                        colWidth={3}
                                    />
                                ) )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}