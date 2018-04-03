import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import About from './sections/about/About';
import Home from './sections/home/Home';
import Speakers from './sections/speakers/Speakers';
import Team from './sections/team/Team';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/speakers">Speakers</Link>
            </li>
          </ul>

          <hr/>

          <Route 
            exact path="/" 
            component={Home}
          />
          <Route 
            path="/about" 
            component={About}
          />
          <Route 
            path="/speakers" 
            component={Speakers}
          />
        </div>
      </Router>
    );
  }
}

export default App;
