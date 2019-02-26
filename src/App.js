import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';

class App extends Component {
	render() {
		return (
			<Switch>
				{/* <Route path="/checkout" component={Heads} /> */}
				<Route path="/" component={Home} />
			</Switch>
		);
	}
}

export default App;
