import React, { Component } from 'react';

import MainCta from '../../components/Home/Header/Heads';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

export default class Home extends Component {
	state = {
		inputs: {
			name: {
				placeholder: 'Name',
				name: 'name',
				required: true,
				type: 'text',
				value: '',
			},
			office: {
				placeholder: 'What position are you running for?',
				name: 'office',
				required: true,
				type: 'text',
				value: '',
			}
		}

	}

	handleChange = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	continueHandler = () => {
		// push the state up to redux
		this.props.history.push('/questions')
	}

	render() {
		return (
			<MainCta>
				<div className="container">
					{Object.keys(this.state.inputs).map((key, index) => {
						return <div key={index} className="row">
							<div className="col-xs-12 col-sm-6">
								<Input changeHandler={this.handleChange} inputSetters={this.state.inputs[key]} />
							</div>
							<div className="col-xs-12 col-sm-6"></div>
						</div>
					}
					)}
					<p><Button onClick={this.continueHandler}>Continue</Button></p>
				</div>
			</MainCta>

		)
	}
}
