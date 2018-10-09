import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
	// console.log('THIS IS ALSO MY TEXT. Action received', action);
	switch (action.type) {
		case FETCH_WEATHER:
			return state.concat ([action.payload.data]);
			//return [ action.paylaod.data, ...state ]; // [city, city, city]
			//the aboe way didn't work.
	}
	return state;
}

// we do line 7 in order to create a new array, and a new state/a new array.
// This must be done. Changing the state of the state as in updating it
//  should not be done. So no .push...
//
// state is the name of the array.
// question 1 to answer-- what should our data structure be.
// fetch weather action type switch statement
//
// take our current city and add action.payload.data to it.
// we can set state here.
//
// 1st way-- concat a list of cities with a new array of cities.
//return state.concat ([action.payload.data]);
	// concat doesn't change the array, but makes a new array
	// has old stuff (state) and adds the new stuff with concat
	// returning a NEW version of state, not UPDATING the state.
//
// 2nd way--
// return [ action.paylaod.data, ...state ];  gives –– [city, city, city]
	// ... [ make a new array with action.payload.data inside
	//  and ...
	//  ... indecates it is an array.
	//  ...state insert it into the new array. ]

