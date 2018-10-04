import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind the context of on input change
		// "This" is the searchbar!-- has a function called onInputChange
		// bind this to the inInputChange statement below.
		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		this.setState({ term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();

	}

	render() {
		return (
			<form onSubmit={this.onFormSubmit}
			className="input-group">
				<input
					placeholder="Get a 5 day forcast in your fav cities"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				/>

				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">submit </button>
				</span>
			</form>
		);
	}
}
//controlled field tktk
