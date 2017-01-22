import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as constants from './PlacesActions.js'
import Place from './Place.js'
import initSagas from './RootSaga.js'

// reducer for the places array
function places(state = [], action) {
  switch (action.type) {
    case constants.ADD_PLACE:
      return [...state, action.place];
    default:
      //console.log("Unrecognized action in places: " + action.type);
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
      //console.log("Unrecognized action in newPlace: " + action.type);
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
      //console.log("Unrecognized action in nav: " + action.type);
      return state;
  }
}

const placesReducer = combineReducers({
  nav,
  newPlace,
  places
})

function createPlacesStore(initialState) {

  console.log("Creating saga middleware.")
  const sagaMiddleware = createSagaMiddleware()

  console.log("Creating placecs store.")
  let store = createStore(
    placesReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  console.log("Initializing sagas.")
  initSagas(sagaMiddleware)

  return store
}

export default createPlacesStore
