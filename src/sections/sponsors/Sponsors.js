import React from 'react';

import { 
    Description,
    SectionTitle, 
    SectionSubtitle, 
    Tabs, 
    Tab 
} from '../../common';

const PACKAGE_TABS = {
    package1: {
        name: 'Paquete Gold',
        id: 'p1',
        benefits: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        price: 1010
    },
    package2: {
        name: 'Paquete Silver',
        id: 'p2',
        benefits: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        price: 1000
    },
    package3: {
        name: 'Paquete Premium',
        id: 'p3',
        benefits: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        price: 900
    },
    package4: {
        name: 'Package 4',
        id: 'p4',
        benefits: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ],
        price: 800
    },
}

export default class Sponsors extends React.Component{
    render(){
        return (
            <div className="sponsors-page">
                <SectionTitle
                    title="Sponsors"
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
                    title="¿Por qué ser un auspiciador TEDxUMSA?"
                    description="Como auspiciador de TEDxUMSA, podrá tener la oportunidad de entablar un diálogo auténtico con un público valioso y ambicioso: gente apasionada y de mente abierta. Su participación en nuestro evento no es solo para presentar nuevas ideas, sino también para aprender de TEDx y su comunidad."
                    imagePath="/images/ted.png"
                    leftImage={false}
                />
                <SectionSubtitle
                    title="¿Qué ofrecemos?"
                />
                <br/>
                <br/>
                <br/>
                <Tabs tabsTitle="Paquetes de Auspicio">
                    { this._get_tabs() }
                </Tabs> 
            </React.Fragment>
        );
    }
    
    _get_tabs = () => 
        Object.keys(PACKAGE_TABS).map( (pack, index) => 
            <Tab
                key={`${PACKAGE_TABS[pack].id}-${index}`}
                active={ index === 0 ? "true" : null }
                title={ PACKAGE_TABS[pack].name }
            >
                <article className="message is-medium is-primary">
                    <div className="message-header">
                        <p>{ PACKAGE_TABS[pack].name }</p>
                    </div>
                    <div className="message-body">
                        <ul>
                            { PACKAGE_TABS[pack].benefits.map( (ben, idx) => 
                                <li className="benefit-list" key={`ben-${idx}`}>{ ben }</li>
                            ) }
                        </ul>
                        <h1 className="price title is-3">Inversion: $ {PACKAGE_TABS[pack].price}</h1>
                    </div>

                </article>
            </Tab>
        );
}