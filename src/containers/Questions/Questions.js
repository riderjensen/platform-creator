import React, { Component } from 'react';
import Question from '../../components/QuestionArea/Questions/Question';
import Button from '../../components/UI/Button/Button';

export default class Questions extends Component {

	state = {
		inputs: {
			// name must be the same as the key
			placeholder: {
				placeholder: 'Test placeholder',
				name: 'placeholder',
				required: true,
				type: 'text',
				value: '',
			},
			placeholder2: {
				placeholder: 'Test placeholder2',
				name: 'placeholder2',
				required: true,
				type: 'text',
				value: '',
			},
		}
	}

	onChangeHandler = (val, name) => {
		const newState = { ...this.state.inputs };
		newState[name].value = val;
		this.setState({
			inputs: newState
		})
	}

	pushFinishSite = () => {
		this.props.history.push('/site');
	}

	render() {
		return (
			<div className="container">
				<div className="col-xs-12">
					<h1>Question Area</h1>
					{Object.keys(this.state.inputs).map((key, index) => {
						return (
							<Question key={this.state.inputs[key].name} onChange={this.onChangeHandler} inputSetters={this.state.inputs[key]}>Test</Question>
						);
					})}
					<p><Button click="#" onClick={this.pushFinishSite}>Create Site</Button></p>
				</div>
			</div>

		)
	}
}
