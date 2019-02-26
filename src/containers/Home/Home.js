import React, { Component } from 'react'

import Auxil from '../../hoc/Auxil/Auxil';
import MainCta from '../../components/Home/Header/Heads';
import Input from '../../components/UI/Input/Input';

export default class Home extends Component {
	render() {
		return (
			<Auxil>
				<MainCta />
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-6">
							<Input inputSetters={{
								placeholder: 'Name',
								type: 'text'
							}} />
						</div>
						<div className="col-xs-12 col-sm-6">
							<Input inputSetters={{
								placeholder: 'Name',
								type: 'text'
							}} />
						</div>
					</div>
				</div>
			</Auxil>
		)
	}
}
