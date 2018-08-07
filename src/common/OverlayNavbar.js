import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    MENU_ROUTES
} from '../constants/Routes';

class OverlayNavbar extends React.Component{
    state = {
        burgerMenuOpen: false
    }
    render() {
        const { burgerMenuOpen } = this.state;
        return (
            <div className="td-navbar">
                 <nav id="navbar" className="navbar has-shadow is-spaced is-transparent">
                    <div className="container">
                        { this.renderBrand() }
                        <div 
                            id="navMenuDocumentation" 
                            className={`navbar-menu ${burgerMenuOpen ? 'is-active' : ''}`}
                        >
                            { this.renderNavStart() }
                            { this.renderNavEnd() }
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    renderBrand = () => (
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <img src="/images/TEDxUMSA1.png" alt="TEDxUMSA 2018" height="28"/>
            </a>
            <div 
                id="navbarBurger" 
                className={`navbar-burger burger ${this.state.burgerMenuOpen ? 'is-active' : ''}`}
                data-target="navMenuDocumentation"
                onClick={this.onOpenBurgerMenu}
            >
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    );

    renderNavStart = () => (
        <div className="navbar-start">
            { MENU_ROUTES.map((item, index) => 
                <div 
                    key={`menuitem-${index}`} 
                    className="navbar-item"
                    onClick={this.onCustomCloseBurgerMenu}
                >
                    <Link
                        to={item.path}
                    >
                        {item.text.toUpperCase()}
                    </Link>
                </div>
            )}
        </div>
    );

    renderNavEnd = () => (
        <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped is-grouped-multiline">
                    <p className="control">
                        <button className="button is-danger is-rounded">
                            <strong>Auspiciar</strong>
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

    onOpenBurgerMenu = () => {
        const { burgerMenuOpen } = this.state;
        this.setState({
            burgerMenuOpen: !burgerMenuOpen
        })
    }

    onCustomCloseBurgerMenu = () => {
        const { burgerMenuOpen } = this.state;
        burgerMenuOpen && this.setState({
            burgerMenuOpen: false
        });
    }
}

export { OverlayNavbar }