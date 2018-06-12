import React from 'react';

import Countdown from '../../common/Countdown';

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
                { this._get_hero() }
                { this._get_content() }
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
    _get_hero = () => 
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

    _get_content = () =>
        <React.Fragment>
            { this._get_content_header() }
            <div className="container is-fullhd">
                <div className="columns more-details">
                    { this._get_map() }
                    { this._get_details_card() }
                </div>
            </div>
        </React.Fragment>

    _get_content_header = () => 
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        Más detalles
                    </h1>
                </div>
            </div>
        </section>

    _get_map = () => 
        <div 
            className="column is-7"
            id="map"
        />

    _get_details_card = () =>
        <div className="column details">
            <h1 className="has-text-centered is-size-1">¿Dónde y cuándo?</h1>
            <dl>
                <dt className="is-size-3">LUGAR</dt>
                <dd>
                    <p>Paraninfo Universitario - UMSA</p>
                    <p>Av. Villazón N° 1995, Plaza del Bicentenario</p>
                    <p>La Paz - Bolivia</p>
                </dd>
                <dt className="is-size-3">HORA Y FECHA</dt>
                <dd>
                    <p>Sábado 18 de Septiembre, 2018</p>
                    <p>A partir de las 8:00</p>
                </dd>
            </dl>
            <h3 className="is-size-3 has-text-centered">NO FALTES!</h3>
        </div>
}