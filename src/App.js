import React from 'react';
import './App.css';
import {
  HashRouter as Router,
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
							<Footer/>
						</div>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
