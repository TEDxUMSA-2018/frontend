import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    MENU_ROUTES
} from '../constants/Routes';

export default class OverlayMenu extends React.Component{
  state = {
    isOpen: false
  }

  render() {
    const {isOpen} = this.state;
    return (
      isOpen
        ? this._get_menu()
        : this._get_open_btn()
    )
  }

  _get_open_btn = () => 
    <button
      onClick={ this.openMenu }
    >
      Open Menu
    </button>

  _get_menu = () => 
    <div
      className={`overlay`}
    >
      <a 
        className="closebtn" 
        onClick={ this.closeMenu }
      >
        &times;
      </a>
      <div className="overlay-content">
        <ul>
          { MENU_ROUTES.map( (item, index) =>
            <li
              key={`route-${index}`}
            >
              <Link
                to={item.path}
              >
                {item.text}
              </Link>
            </li>
          ) }
        </ul>
      </div>
    </div>

  openMenu = () => {
    this.setState({
      isOpen: true
    })
  }

  closeMenu = () => {
    this.setState({
      isOpen: false
    })
  }
}