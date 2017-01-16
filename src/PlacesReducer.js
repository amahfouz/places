import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import * as constants from './PlacesActions.js'
import Place from './Place.js'
import { initSagas } from './RootSaga.js'

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

const placesReducer = combineReducers({
  nav,
  newPlace,
  places
})

const sagaMiddleware = createSagaMiddleware()

function createPlacesStore(initialState) {
  let store = createStore(
    placesReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );

  initSagas(sagaMiddleware)
  // start the places processor
  const rootTask = sagaMiddleware.run(rootSaga)

  rootTask.done.catch(function(error) {
    console.log("Global catch: ---------------------------------" )
  })

  //console.log("REDUX SAGA TASK:" + task.isRunning() + "," + task.result())

  return store
}

export default createPlacesStore
