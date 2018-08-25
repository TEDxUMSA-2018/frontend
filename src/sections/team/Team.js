import React from 'react';
import { PersonCard } from '../../common';
import { TEAM } from "./team";

export default class Team extends React.Component{
    render(){
        return (
            <div className="team-page">
                <section className="hero legend is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h2 className="who subtitle is-size-2">
                                Nosotros hacemos
                            </h2>
                            <h1 className="event title is-size-1">
                                TEDxUMSA
                            </h1>
                        </div>
                    </div>
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
                                    />
                                ) )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}