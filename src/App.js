import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.css';

class App extends Component {
	render() {
		return (
			<div className={classes.App}>
				<Switch>
					<Route path="/checkout" component={() => { <h1>Checkout</h1> }} />
					<Route path="/orders" component={() => { <h1>Orders</h1> }} />
					<Route path="/" component={() => { <h1>Home</h1> }} />
				</Switch>
			</div>
		);
	}
}

export default App;
