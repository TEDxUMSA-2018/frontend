import React from 'react';

export default class Sponsors extends React.Component{
    render(){
        return (
            <div className="sponsors-page">
                <section className="hero is-fullheight is-primary has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-size-1-desktop is-size-2-mobile">
                                ¿POR QUÉ SER UN AUSPICIADOR?
                            </h1>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight is-primary has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column is-3"/>
                                <div className="column">
                                    <h1 className="title is-green is-size-1-desktop is-size-3-mobile">
                                        RECONOCIMIENTO INTERNACIONAL
                                    </h1>
                                    <h2>
                                        Siendo este evento parte de la organización internacional TED, esperamos contar con su apoyo para la realización del TEDxUMSA debido a que es una gran oportunidad para los jóvenes bolivianos de encontrar su propósito personal y así formar una Bolivia mejor, mediante ideas que cambien actitudes. Esto será posible gracias a los expositores y auspiciadores que serán reconocidos internacionalmente a través de este evento.
                                    </h2>
                                </div>
                                <div className="column is-3"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight is-primary has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column is-4"/>
                                <div className="column">
                                    <h1 className="title is-number is-green">
                                        4
                                    </h1>
                                    <h2>
                                        Tenemos cuatro tipos de paquetes para nuestros auspiciadores con diferentes beneficios de visibilidad antes, durante y despues del evento.
                                    </h2>
                                </div>
                                <div className="column is-4"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight is-primary has-background-black">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title is-number is-green is-hidden-mobile">
                                        + 10000
                                    </h1>
                                    <h1 className="title is-number is-green is-hidden-tablet">
                                        + 10 K
                                    </h1>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-4"/>
                                <div className="column">
                                    <h2>
                                        Llegaremos a más de 100 jóvenes universitarios, 100 asistentes presenciales mas los que verán el evento transmitido en vivo por streaming y por el canal oficial de YouTube.
                                    </h2>
                                </div>
                                <div className="column is-4"/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight is-primary has-background-white">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-size-1 has-text-black-bis">
                                Auspiciadores TEDxUMSA <span className='aus18'>2018</span>
                            </h1>
                            <img src="images/2018.png" alt="Auspiciadores 2017"/>
                        </div>
                    </div>
                </section>
                <section className="hero is-fullheight is-primary has-background-white">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <h1 className="title is-size-1 has-text-black-bis">
                                Auspiciadores TEDxUMSA <span className='aus17'>2017</span>
                            </h1>
                            <br/>
                            <img src="images/2017.jpg" alt="Auspiciadores 2017"/>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}