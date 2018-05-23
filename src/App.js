import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  COMPONENT_ROUTES
} from './constants/Routes';
import Footer from './sections/features/Footer';
import OverlayMenu from './common/OverlayNavbar';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isMenuOpen: false
    }
  }

  // HOOKS

  render() {
    return (
      <div>
        <div className="main-view">
          <Router>
            <div>
              <OverlayMenu
                isOpen={this.state.isMenuOpen}
                closeMenu={ this.closeMenu }
              />
              { this.getHeaderConfig() }
              { COMPONENT_ROUTES.map((item, index) =>
                <Route
                  key={`route-${index}`}
                  exact={item.exact}
                  path={item.path}
                  component={item.component}
                />
              )}
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }

  // DOM
  getHeaderConfig = () => 
    <header className="header">
      <nav>
          <i 
            className="menu-icon fas fa-bars"
            onClick={ this.openMenu }
          />
      </nav>
    </header>

  // EVENTS

  openMenu = () => {
    console.log("hi");
    this.setState({
      isMenuOpen: true
    })
  }
  closeMenu = () => {
    this.setState({
      isMenuOpen: false
    })
  }
}

export default App;
