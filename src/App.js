import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  COMPONENT_ROUTES
} from './constants/Routes';
import {
  OverlayNavbar,
  Footer
} from './common';

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
              <OverlayNavbar />
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

  // EVENTS

  openMenu = () => {
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
