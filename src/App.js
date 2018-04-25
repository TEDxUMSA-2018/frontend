import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {
  COMPONENT_ROUTES
} from './constants/Routes';
import Footer from './common/Footer';
import Header from './common/Header'

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="main-view">
          <Header />
          <Router>
            <div>
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
