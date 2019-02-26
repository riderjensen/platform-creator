import React from 'react'
import classes from './Input.css'

export default function Input(props) {
	return (
		<input className={classes.Input} {...props.inputSetters} />
	)
}
