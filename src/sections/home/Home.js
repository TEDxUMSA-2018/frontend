import React from 'react';

import Countdown from '../../common/Countdown';

export default class Home extends React.Component{
    render(){
        return (
            <div
                className="home-page"
            >
                { this._get_hero() }
                { this._get_content() }
            </div>
        )
    }

    // DOM
    _get_hero = () => 
        <section key="hero-image" className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        TEDxUMSA 2018
                    </h1>
                    <h3 className="hero-subtitle">
                        15 de Septiembre, Paraninfo Universitario
                    </h3>
                </div>
            </div>
            <div className="hero-foot">
                <div className="countdown">
                    <Countdown
                        deadline={ new Date("Sep 15, 2018 08:00:00").getTime() }
                    />
                    <div className="days">

                    </div>
                    <div className="hours">

                    </div>
                    <div className="mins">

                    </div>
                    <div className="secs">

                    </div>
                </div>
            </div>
        </section>

    _get_content = () =>
        <article
            key='home-content'
        >
            <h2 className="title">Hi!</h2>
            <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
            <p>Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus.</p>
            <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
        </article>

}