// Saga to process nearby locations

import { put, select } from 'redux-saga/effects'

import * as constants from './PlacesActions.js'

// nearbyPlaces is an array whose entries of the form:
// { i : <googl_place_id>, ... }
export default function* nearbySaga(newNearbyArray) {
  console.log("Evaluating near by places: " + JSON.stringify(newNearby))
  let newNearby = new Set(newNearbyArray)
  let state = yield select()
  let curNearby = state.nearbyPlaces

  // compute newly approachedd places
  if (newNearby) {
    for (let loc of newNearby) {
      if (! curNearby.has(loc.i)) {
        console.log("Nearing a place!")
        yield put({
          type: constants.NEARING_PLACE,
          placeId: loc.i
        })
      }
    }
  }

  // places that are no longer near-by are being departed
  if (curNearby) {
    for (let placeId of curNearby) {
      if (! newNearby.has(placeId)) {
        console.log("Departing a place! ")
        yield put({
          type: constants.LEAVING_PLACE,
          placeId: placeId
        })
      }
    }
  }
}
