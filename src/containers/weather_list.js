import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
// Sparklines is parent, SparklinesLine is child
//
class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat } = cityData.city.coord;
		// means find the coord obj. grab the lon and lat props and assign to 2 new
		// variables, lon and lat. same as below 2 lines:
		//
		// const lon = cityData.city.coord.lon;
		// const lat = cityData.city.coord.lat;
		//
		// console.log(temps);
		// (td = table data)
		return (
			<tr key={name}>
				<td> <GoogleMap lon={lon} lat={lat} /></td>
				<td> <Chart data={temps} color="orange" units="K" /></td>
				<td> <Chart data={pressures} color="blue" units="hPa" /></td>
				<td> <Chart data={humidities} color="black"units="%" /></td>
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
							<th>Temperature (Kelvin) </th>
							<th>Pressure (hPa) </th>
							<th>Humidty (%) </th>
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
