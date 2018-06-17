import React from 'react';

import SectionTitle from '../../common/SectionTitle';
import Description from './components/Description';

const MAP = {
    ted: {
        title: 'TED',
        description: 'TED es una fundación global dedicada a difundir ideas valiosas. Inició en 1984 como una conferencia que juntaba personas de tres diferentes áreas: Tecnología, Entretenimiento y Diseño. Desde entonces, su alcance se ha vuelto cada vez más amplio a nivel mundial.',
        image: 'images/ted.png'
    },
    tedxumsa: {
        title: 'TEDxUMSA',
        description: 'TEDxUMSA es una fundación global dedicada a difundir ideas valiosas. Inició en 1984 como una conferencia que juntaba personas de tres diferentes áreas: Tecnología, Entretenimiento y Diseño. Desde entonces, su alcance se ha vuelto cada vez más amplio a nivel mundial.',
        image: 'images/ted.png'
    },
    tedxumsa17: {
        title: 'TEDxUMSA 2017',
        description: 'Nullam eros mi, mollis in sollicitudin non, tincidunt sed enim. Sed et felis metus, rhoncus ornare nibh. Ut at magna leo. Suspendisse egestas est ac dolor imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
}

export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
    }

    render(){
        return (
            <div className="about-page">
                <SectionTitle
                    title="Acerca de"
                    background="pink"
                />
                { this._get_content() }
            </div>
        )
    }

    _get_content = () => {
        return (
            <React.Fragment>
                <Description
                    title={ MAP.ted.title }
                    description={ MAP.ted.description }
                    imagePath={ MAP.ted.image }
                    leftImage={ false }
                />                
                <Description
                    title={ MAP.tedxumsa.title }
                    description={ MAP.tedxumsa.description }
                    imagePath={ MAP.tedxumsa.image }
                    leftImage={true}
                />                
                { this._get_counter() }
                <button 
                    onClick={ this.openVideo }
                >
                    Ver video
                </button>
                <div className={`modal ${this.state.isModalOpen && 'is-active'}`}>
                    <div 
                        onClick={ this.closeVideo }
                        className="modal-background" 
                    />
                    <div className="modal-content">
                        <iframe 
                            title="teaser" 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/7ldXMuwNC0I?rel=0" 
                            frameBorder="0" allow="autoplay; encrypted-media" 
                            allowFullScreen 
                        />
                    </div>
                    <button 
                        onClick={ this.closeVideo }
                        className="modal-close is-large" 
                        aria-label="close" />
                </div>
            </React.Fragment>
        );
    }

    _get_counter = () =>
        <div className="container">
            <div className="section-header has-text-centered">
                <h2 className="title is-1 is-spaced">{ MAP.tedxumsa17.title }</h2>
                <h3 className="subtitle is-5">{ MAP.tedxumsa17.description }</h3>
                <div className="counter">
                    { this._get_counter_item("13", "expositores") }
                    { this._get_counter_item("100+", "asistentes") }
                    { this._get_counter_item("15+", "auspiciadores") }
                    { this._get_counter_item("50M+", "fans en Facebook") }
                </div>
            </div>
        </div>

    _get_counter_item = (number, label) => 
        <div className="counter-item">
            <div className="counter-number">{ number }</div>
            <div className="counter-label">{ label }</div>
        </div>

    openVideo = () => {
        this.setState({
            isModalOpen: true
        })
    }
    closeVideo = () => {
        this.setState({
            isModalOpen: false
        })
    }
}