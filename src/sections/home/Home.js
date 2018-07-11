import React from 'react';

import { 
    Countdown,
    SectionSubtitle
} from '../../common';
import { ParticipateCard } from './components/ParticipateCard';

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
                { this.renderFirstRow() }
                { this.renderSecondRow() }
                { this.renderThirdRow() }
            </div>
        )
    }

    // HOOKS

    componentDidMount = () => {
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
            title: 'TEDxUMSA 2018'
        });
        mapMarker.setMap(map);
    }

    // DOM
    _get_hero = () => (
        <section key="hero-image" className="hero is-fullheight tedxumsa-header">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title is-size-1-mobile">
                        TEDxUMSA 2018
                    </h1>
                    <h3 className="hero-subtitle">
                        15 de Septiembre, Paraninfo Universitario
                    </h3>
                </div>
            </div>
            <div className="hero-foot">
                <Countdown
                    deadline={ new Date("Sep 15, 2018 08:00:00").getTime() }
                />
            </div>
        </section>
    )

    renderHero = () => (
        <section className="hero-image section is-hero">
            <div className="hero-body">
                <div className="container container-desktop is-vcentered is-hidden-touch">
                    <div className="columns is-vcentered">
                        <div className="column is-4 is-5-fullhd is-offset-1-fullhd">
                            <div className="section-header has-text-centered">
                                <h1 className="day-number title">67</h1>
                                <h2 className="days subtitle is-3">días</h2>
                            </div>
                        </div>
                        <div className="column is-2" />
                        <div className="column is-6">
                            <div className="section-header">
                                <h1 className="name title">TEDxUMSA</h1>
                                <h2 className="year subtitle is-3">2018</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-mobile is-vcentered is-hidden-desktop">
                    <div className="is-vcentered">
                        <h1 className="title">
                            TEDxUMSA 2018
                        </h1>
                        <h2 className="subtitle">
                            67 días
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );

    renderFirstRow = () => (
        <section className="hero first-row">
            <div className="columns is-gapless is-vcentered">
                <div className="column first-col is-6">
                    <img src="https://tedconfblog.files.wordpress.com/2014/03/ted2014_dd_dsc_1560.jpg?w=900&h=599" style={{ height: '100vh', objectFit: 'cover' }} />
                </div>
                <div className="column second-col is-6">
                    <div className="is-vcentered">
                        <div className="is-vcentered has-text-centered">
                            <h1 className="title is-centered">2<span className="small">da</span></h1>
                            <h2 className="subtitle is-centered">versión</h2>
                        </div>
                        <div className="is-vcentered content content-text">
                            <p>Los organizadores de TEDxUMSA no organizan eventos por razones políticas, recompensas monetarias o ganancias personales, lo hacen porque realmente creen en que una idea puede cambiar el mundo</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    renderSecondRow = () => (
        <section className="hero second-row">
            <div className="columns is-gapless is-vcentered">
                <div className="column first-col is-6">
                    <div className="is-vcentered">
                        <div className="is-vcentered has-text-centered">
                            <h1 className="title is-centered">¿Qué es TED y TEDx?</h1>
                        </div>
                        <div className="is-vcentered content content-text has-text-centered">
                            <p>TED es una fundación global dedicada a difundir ideas valiosas. Su alcance es a nivel mundial    </p>
                            <img className="image" src="https://tedconfblog.files.wordpress.com/2014/03/ted2014_dd_dsc_1560.jpg?w=900&h=599" style={{ width: '50vw' }} />
                        </div>
                    </div>
                </div>
                <div className="column second-col is-6">
                    <div className="is-vcentered">
                        <div className="is-vcentered has-text-centered">
                            <h1 className="title is-centered">TEDxUMSA</h1>
                        </div>
                        <div className="is-vcentered content content-text">
                            <p>TEDx fue creado en el espiritu de la misión de TED que es Difundir Ideas Valiosas. Fue diseñado para dar a las comunidades la oportunidad de estimular el diálogo y a vivir experiencias parecidas a las vividas en TED a un nivel local.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    renderThirdRow = () => (
        <div className="container">
            <section className="hero is-medium">
                <div className="hero-body">
                    <div className="where container has-text-centered">
                        <h1 className="title is-centered">
                            ¿DÓNDE?
                        </h1>
                    </div>
                </div>
            </section>
            <section className="hero is-info is-large">
                <div id="map"/>
            </section>
        </div>
    );

    // _get_content = () =>
    //     <React.Fragment>
    //         <SectionSubtitle 
    //             title="Más detalles"
    //         />
    //         <div className="container is-fullhd">
    //             <div className="columns more-details">
    //                 { this._get_map() }
    //                 { this._get_details_card() }
    //             </div>
    //         </div>
    //         <SectionSubtitle 
    //             title="¿Cómo participar?"
    //         />
    //         <section className="section is-usp has-background is-medium">
    //             <div className="container">
    //                 <div className="columns">
    //                     <ParticipateCard
    //                         imageUrl=""
    //                         assetUrl="https://goo.gl/forms/iTgKszIrmx7o6C3j2"
    //                         title="Recomienda un expositor"
    //                         content="¿Eres o conoces a alguien que podría dar una charla en TEDxUMSA 2018?. Llena este formulario!."
    //                     />
    //                     <ParticipateCard
    //                         imageUrl=""
    //                         title="Sé un auspiciador"
    //                         content="¿Quieres ayudar a que se lleve a cabo nuestro evento?. Aqui encontrarás mas información."
    //                     />
    //                     <ParticipateCard
    //                         imageUrl=""
    //                         title="Asiste al TEDxUMSA 2018"
    //                         content="Inscríbete para ser uno de los asistentes de nuestro evento y vivir la experiencia TEDxUMSA."
    //                     />                       
    //                 </div>
    //             </div>
    //         </section>
    //     </React.Fragment>

    // _get_map = () => 
    //     <div 
    //         className="column is-7"
    //         id="map"
    //     />

    // _get_details_card = () =>
    //     <div className="column details">
    //         <h1 className="has-text-centered is-size-1">¿Dónde y cuándo?</h1>
    //         <dl>
    //             <dt className="is-size-3">LUGAR</dt>
    //             <dd>
    //                 <p>Paraninfo Universitario - UMSA</p>
    //                 <p>Av. Villazón N° 1995, Plaza del Bicentenario</p>
    //                 <p>La Paz - Bolivia</p>
    //             </dd>
    //             <dt className="is-size-3">HORA Y FECHA</dt>
    //             <dd>
    //                 <p>Sábado 18 de Septiembre, 2018</p>
    //                 <p>A partir de las 8:00</p>
    //             </dd>
    //         </dl>
    //         <h3 className="is-size-3 has-text-centered">NO FALTES!</h3>
    //     </div>
}