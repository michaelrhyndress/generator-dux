import React, { Component } from "react";
import { connect } from 'react-redux';
import { setName } from '../actions';

@connect((store) => {
	return {
		// name: store.name,
	}
})
export class <%= compName %> extends Component {
	
	handleChange = (e, value) => {
		this.props.dispatch(setName(value));
	}
	
	render() {
		return (
			<input
				id="name"
				onChange={this.handleChange}
				value={this.props.name} />
		);
	}
}