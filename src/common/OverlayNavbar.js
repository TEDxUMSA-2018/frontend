import React from 'react';
import {
    Link
} from 'react-router-dom';
import {
    MENU_ROUTES
} from '../constants/Routes';

export default class OverlayMenu extends React.Component{
  render() {
    const {isOpen} = this.props;
    return (
      isOpen 
        ? this._get_menu() 
        : null
    )
  }

  _get_menu = () => 
    <div
      className='overlay'
    >
      <i 
        className="menu-icon fas fa-times" 
        onClick={ this.props.closeMenu }
      />
      <div
        className='menu-items'
      >
        { MENU_ROUTES.map( (item, index) =>
          <div
            className='menu-item'
            key={`route-${index}`}
            onClick={ this.props.closeMenu }
          >
            <Link
              to={item.path}
            >
              {item.text}
            </Link>
          </div>
        ) }
      </div>
    </div>
}