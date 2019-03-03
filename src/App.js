import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Questions from './containers/Questions/Questions';
import Site from './containers/Site/Site';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route path="/site" component={Site} />
				<Route path="/questions" component={Questions} />
				<Route path="/" component={Home} />
			</Switch>
		);
	}
}

export default App;
