// ACTIONS FOLDER INDEX.JS
import axios from 'axios';

const API_KEY = '09145dd6a4a835cf8a8c2cc42950d6aa';
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// Above without template strings.
// const URL = 'https://samples.openweathermap.org/data/2.5/forecast?appid=' + API_KEY;

// Define variable (FETCH_WEATHER) AND
// ASSIGNED A STRING
// -- a single variable that holds our action type
export const FETCH_WEATHER = 'FETCH_WEATHER';

// action
export function fetchWeather(city) {
	// below-- a crafted url with the city
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	// axios rerurns a promise but the promise doesn't
	// contain the data.

	// console.log('THIS IS MY STRING TO LABEL MY request. THIS IS THE CONSOLE.LOG RESPONSE:',request);
	// // shows the city after entered in the search bar
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
// we are returing the payload as the promise.
	// const request = axios.get{url}
	// the url is the const defined above.

