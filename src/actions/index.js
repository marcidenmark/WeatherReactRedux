// ACTIONS FOLDER INDEX.JS
import axios from 'axios';

const API_KEY = '09145dd6a4a835cf8a8c2cc42950d6aa';
// const URL = 'https://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Define variable (FETCH_WEATHER) AND
// ASSIGNED A STRING
// -- a single variable that holds our action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action
export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},dk`;
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}

// const url = `${ROOT_URL}&q=${city},dk`;
	// const request = axios.get{url};
	// .get{url} the url is the const defined above.

// USE BELOW IF THE DK DOESN'T WORK
// making request url
//	const url = `${ROOT_URL}&q=${city},us`

