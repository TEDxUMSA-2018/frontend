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
  render() {
    return (
      <div>
        <div className="main-view">
          <Router>
            <div>
              <OverlayMenu/>
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

  toggleMenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({
      isMenuOpen: !isMenuOpen
    })
  }
}

export default App;
