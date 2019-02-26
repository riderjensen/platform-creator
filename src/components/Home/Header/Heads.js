import React from 'react'
import classes from './Heads.css';

import handshake from '../../../assets/images/handshake.jpg';

export default function Header() {
	return (
		<div className={classes.Heads} style={{
			backgroundImage: `url(${handshake})`,
		}}>
			<div className={classes.Overlay}></div>
			<div className={classes.Content}>
				<div className={classes.ContentBox}>
					<h1>Platform Creator</h1>
					<p>Create the perfect political campaign website in just 10 minutes.</p>
				</div>
			</div>
		</div >
	)
}
