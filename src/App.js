import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

import Heads from './components/Home/Header/Heads';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Switch>
					<Route path="/checkout" component={Heads} />
					<Route path="/orders" component={Heads} />
					<Route path="/" component={Heads} />
				</Switch>
			</div>
		);
	}
}

export default App;
