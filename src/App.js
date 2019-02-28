import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './containers/Home/Home';
import Questions from './containers/Questions/Questions';

class App extends Component {
	render() {
		return (
			<Switch>
				{/* <Route path="/checkout" component={Heads} /> */}
				<Route path="/questions" component={Questions} />
				<Route path="/" component={Home} />
			</Switch>
		);
	}
}

export default App;
