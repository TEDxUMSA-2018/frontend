import React from 'react';

export default class Home extends React.Component{
    render(){
        return ([
            this._get_hero_image(),
            this._get_content()
        ])
    }

    // DOM

    _get_hero_image = () =>
        <section 
            className="hero"
            key='home-hero'
        >
            <header className="hero-header">
                <h1 className="hero-title">TEDxUMSA 2018</h1>
                <h4>15 de Septiembre, Paraninfo Universitario</h4>
            </header>
            {/* <footer className="hero-footer">
                <a className="button button-primary" href="#">Participar</a>
                <a className="button" href="#">Recomendar expositor</a>
            </footer> */}
        </section>

    _get_content = () =>
        <article
            key='home-content'
        >
            <h2>Hi!</h2>
            <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
            <p>Laoreet fusce condimentum venenatis quisque imperdiet ornare cras faucibus convallis, pharetra habitasse elementum ut bibendum per sociosqu phasellus etiam, velit faucibus integer torquent leo elementum maecenas netus.</p>
            <p>Ad donec tincidunt torquent ultricies convallis sodales faucibus magna, fringilla lorem blandit sollicitudin donec faucibus curae orci molestie, et proin curae aliquet venenatis ligula amet vivamus orci varius arcu.</p>
        </article>

}