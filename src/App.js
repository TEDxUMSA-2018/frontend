import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import {
  MENU_ROUTES,
  COMPONENT_ROUTES
} from './constants/Routes';
import Footer from './sections/features/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="main-view">
          <Router>
            <div>
              <ul>
                  {
                      MENU_ROUTES.map((item, index) =>
                          <li
                              key={`menu-${index}`}
                          >
                            <Link
                                to={item.path}
                            >
                                {item.text}
                            </Link>
                          </li>
                      )}
              </ul>

              <hr/>

                {
                    COMPONENT_ROUTES.map(item =>
                        <Route
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
}

export default App;
