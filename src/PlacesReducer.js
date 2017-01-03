import { combineReducers } from 'redux'
import * as constants from './PlacesActions.js'
import Place from './Place.js'

// reducer for the places array
function places(state = [], action) {
  switch (action.type) {
    case constants.ADD_PLACE:
      return [...state, action.place];
    default:
      console.log("Unrecognized action in places: " + action.type);
      return state;
  }
}

// reducer for the scratch new place being added
function newPlace(state = {}, action) {
  switch (action.type) {
    case constants.PICK_LOCATION:
      return new Place(action.location)
      // let result = Object.assign({}, state, {
      //   location: action.location
      // });
      // result.name = action.location.name;
      // return result;
    default:
      console.log("Unrecognized action in newPlace: " + action.type);
      return state;
  }
}

function nav(state = {}, action) {
  switch (action.type) {
    case constants.SELECT_PLACE:
      console.log("Handling select place " + action.index)
      let updated = Object.assign({}, state, {
        selectedIndex: action.index
      });
      console.log("New nav state: " + JSON.stringify(updated))
      return updated;
    default:
      console.log("Unrecognized action in nav: " + action.type);
      return state;
  }
}

const placesState = combineReducers({
  nav,
  newPlace,
  places
});

export default placesState
