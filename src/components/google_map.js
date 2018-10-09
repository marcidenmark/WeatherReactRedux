import React, { Component } from 'react';

class GoogleMap extends Component {
	componentDidMount() {
		new google.maps.Map(this.refs.map, {
			zoom: 12,
			center: {
				lat:this.props.lat,
				lng: this.props.lon
			}
		});
	}

	render() {
		return <div ref="map" />;
	}
}

export default GoogleMap;
 //"prop ref"
 //in React ref is short for reference
 //html dom element on page
// this.refs.map
// an object with 2 properties
// (this.refs. =>>> is a node.
// This compoent is an example of working with 3rd party libraries and React
