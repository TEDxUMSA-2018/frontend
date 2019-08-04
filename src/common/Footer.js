import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    MENU_ROUTES
} from '../constants/Routes';

class Footer extends React.Component{
    render(){
        return (
            <footer className="app-footer section is-medium" style={{ padding: 20 }}>
                <div className="container">
                    <div className="columns">
                        <div className="column is-5 is-4-widescreen">
                            { this.renderFooterLogo() }
                        </div>
                        <div className="column is-7 is-6-widescreen is-offset-2-widescreen">
                            <div className="columns">
                                { this.renderMenuRoutes() }
                                { this.renderContact() }
                                { this.renderSocial() }
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
    renderFooterLogo = () => (
        <div className="summary">
            <a className="brand" href="/">
                <div className="brand-icon">
                    <img alt="TEDxUMSA" role="presentation" src="/images/TEDxUMSA5.png"/>
                </div>
            </a>
            <p>© 2017 - 2019 TEDxUMSA</p>
        </div>
    );
    renderMenuRoutes = () => (
        <div className="column is-4">
            <div className="menu">
                <p className="menu-label">Mapa del sitio</p>
                <ul className="menu-list">
                    { MENU_ROUTES.map((item, index) => 
                        <li 
                            key={`menuitem-${index}`}
                            className="is-size-7"
                            onClick={() => { window.scroll(0,0); }}
                        >
                            <Link
                                to={item.path}
                            >
                                {item.text.toUpperCase()}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
    renderContact = () => (
        <div className="column is-4">
            <div className="menu">
                <p className="menu-label">Contacto</p>
                <ul className="menu-list">
                    <li><a href="tel:+59171934799">+591 719 34 799</a></li>
                    <li><a href="mailto:tedxumsa@gmail.com">tedxumsa@gmail.com</a></li>
                    <li className="is-size-7" style={{padding: '0.5em 0.75em'}}>PARANINFO UNIVERSITARIO - UMSA</li>
                    <li className="is-size-7" style={{padding: '0.5em 0.75em'}}>AV. VILLAZÓN N° 1995, PLAZA DEL BICENTENARIO</li>
                    <li className="is-size-7" style={{padding: '0.5em 0.75em'}}>LA PAZ - BOLIVIA</li>
                </ul>
            </div>
        </div>
    );
    renderSocial = () => (
        <div className="column is-4">
            <div className="menu">
                <p className="menu-label">Redes sociales</p>
                <ul className="menu-list">
                    <li className="is-size-7">
                        <a href="https://www.facebook.com/TEDxUMSA/" rel="noopener noreferrer" target="_blank">FACEBOOK</a>
                    </li>
                    <li className="is-size-7">
                        <a href="https://twitter.com/TEDxUMSA" rel="noopener noreferrer" target="_blank">TWITTER</a>
                    </li>
                    <li className="is-size-7">
                        <a href="https://www.instagram.com/tedxumsa/" rel="noopener noreferrer" target="_blank">INSTAGRAM</a>
                    </li>
                    <li className="is-size-7">
                        <a href="https://www.youtube.com/channel/UCA0CP2y3iVUhjs6lKxQKHdw" rel="noopener noreferrer" target="_blank">YOUTUBE</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Footer }