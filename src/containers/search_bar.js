import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		// bind the context of on input change
		// "This" is the searchbar!-- has a function called onInputChange
		// bind this to the inInputChange statement below.
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(event) {
		this.setState({ term: event.target.value});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}
// (fetchWather is the the action creator)
// line 25 makes the search bar field be empty again after completing a search
// *** TO USE THIS.BLA BLA... IN LINE 23, YOU NEED TO BIND LIKE ON LINE 16
// otherwise there will be an error, can't read property of props of undefined
	render() {
		return (
			<form onSubmit={this.onFormSubmit}
			className="input-group">
				<input
					placeholder="Get a 5 day forcast in your fav American city"
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
function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}
// fetchWeather calls the action creator from actions folder
export default connect(null, mapDispatchToProps)(SearchBar)

