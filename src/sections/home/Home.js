import React from 'react';

import { Countdown } from '../../common';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            map: {}
        }
    }

    render(){
        return (
            <div
                className="home-page"
            >
                { this.renderHero() }
                <div className="content-container">
                    { this.renderFirstRow() }
                    { this.renderSecondRow() }
                    { this.renderThirdRow() }
                </div>
            </div>
        )
    }

    // HOOKS

    componentDidMount() {
        const googleMaps = window.google.maps;
        const mapContainer = document.getElementById('map');
        const mapLatLon = {
            lat: -16.50497825,
            lng: -68.13013482
        };
        const mapConfig = {
            center: mapLatLon,
            zoom: 18
        };
        let map = new googleMaps.Map(mapContainer, mapConfig);
        const mapMarker = new googleMaps.Marker({
            position: mapLatLon,
            title: 'TEDxUMSA 2019'
        });
        mapMarker.setMap(map);
    }

    // DOM
    renderHero = () => (
        <section className="hero-image section is-hero">
            <div className="hero-body">
                <div className="container container-desktop is-vcentered is-hidden-touch">
                    <div className="columns is-vcentered" style={{ marginTop: 70 }}>
                        <div className="column is-2">
                            <div className="section-header has-text-centered">
                                <Countdown deadline={new Date("Aug 16, 2019 08:00:00").getTime()} />
                            </div>
                        </div>
                        <div className="column is-2" />
                        <div className="column is-8x">
                            <div className="section-header">
                                <h1 className="name title">TEDxUMSA</h1>
                                <h2 className="year subtitle is-3">2019</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-mobile is-vcentered is-hidden-desktop">
                    <div className="is-vcentered" style={{ marginTop: 70 }}>
                        <h1 className="name title">TEDxUMSA</h1>
                        <h2 className="year subtitle is-3">2019</h2>
                        <Countdown deadline={new Date("Aug 16, 2019 08:00:00").getTime()} />
                    </div>
                </div>
            </div>
        </section>
    );

    renderFirstRow = () => (
        <div className="columns is-gapless">
            <div className="column column-style is-6">
                <img alt="TED talk" src="/images/home/ex.jpg" style={{ height: '100vh', objectFit: 'cover', width: "100%" }} />
            </div>
            <div className="column column-style is-6 version">
                <div>
                    <div className="has-text-centered">
                        <h1 className="title is-size-1 is-centered">3<span className="is-size-1">ra</span></h1>
                        <h2 className="subtitle is-size-1 is-centered">versión</h2>
                    </div>
                    <div className="is-vcentered content content-text">
                        <p className="is-size-5">Los organizadores de TEDxUMSA no organizan eventos por razones políticas, recompensas monetarias o ganancias personales, lo hacen porque realmente creen en que una idea puede cambiar el mundo</p>
                    </div>
                </div>
            </div>
        </div>
    );

    renderSecondRow = () => (
        <div className="columns is-gapless">
            <div className="column column-style is-6 ted-tedx">
                <div>
                    <div className="has-text-centered">
                        <h1 className="title is-size-1 is-centered">¿Qué es TED y TEDx?</h1>
                    </div>
                    <div className="content content-text has-text-centered">
                        <p className="is-size-4">TED es una fundación global dedicada a difundir ideas valiosas. Su alcance es a nivel mundial.</p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <img alt="TED talk" className="image" src="/images/home/paraninfo.jpg" style={{ width: '100%', height: '100%' }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="column column-style is-6 tedxumsa">
                <div>
                    <div className="has-text-centered">
                        <h1 className="title is-size-1 is-centered">TEDxUMSA</h1>
                    </div>
                    <div className="content content-text">
                        <p className="is-size-5">TEDx fue creado en el espiritu de la misión de TED que es Difundir Ideas Valiosas. Fue diseñado para dar a las comunidades la oportunidad de estimular el diálogo y a vivir experiencias parecidas a las vividas en TED a un nivel local.</p>
                    </div>
                </div>
            </div>
        </div>
    );

    renderThirdRow = () => (
        <React.Fragment>
            <section className="hero where is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="where title is-size-1">
                            ¿Dónde?
                        </h1>
                    </div>
                </div>
            </section>
            <div className="columns">
                <div className="column is-7 is-gapless" id="map" />
                <div className="column is-5 details">
                    <dl>
                        <dt className="is-size-2">LUGAR</dt>
                        <hr/>
                        <dd>
                            <p>Paraninfo Universitario - UMSA</p>
                            <p>Av. Villazón N° 1995, Plaza del Bicentenario</p>
                            <p>La Paz - Bolivia</p>
                        </dd>
                        <dt className="is-size-2">HORA Y FECHA</dt>
                        <hr/>
                        <dd>
                            <p>Viernes 16 de Agosto, 2019</p>
                            <p>A partir de las 8:00</p>
                        </dd>
                    </dl>
                    <h3 className="is-size-2 has-text-centered">NO FALTES!</h3>
                </div>
            </div>
        </React.Fragment>
    );
}