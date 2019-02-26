import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Home from './containers/Home/Home';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Switch>
					{/* <Route path="/checkout" component={Heads} /> */}
					<Route path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}

export default App;
