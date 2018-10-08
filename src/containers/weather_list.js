import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chart from '../components/chart';
// Sparklines is parent, SparklinesLine is child
// import { actionName } from '../actions/index';
//
class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		// console.log(temps);
		return (
			<tr key={name}>
				<td>{name}</td>
				<td>
					<Chart data={temps} color="orange" />
				</td>
			</tr>
			);
	}
// (city.name is coming from the api)
	render () {
		return(
			<div>
				<table className="table table-hover">

					<thead>
						<tr>
							<th>City </th>
							<th>Temperature </th>
							<th>Pressure </th>
							<th>Humidty </th>
						</tr>
					</thead>
					<tbody>
						{this.props.weather.map(this.renderWeather)}
					</tbody>

				</table>
			</div>
		);
	}
}
// line 30-- weather is the name of the array
function mapStateToProps({ weather }) {
	return { weather };
}
//	(state.weather-- weather coming form the reducer)
//
//	'return { weather: weather };'
//	-- key AND value the same,
//	condensed to { weather }
//	(ES 6 syntax)
//
// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({ actiionName }, dispatch);
// }

export default connect(mapStateToProps)(WeatherList);
