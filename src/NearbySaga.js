// Saga to process nearby locations

import { put, take, call } from 'redux-saga/effects'

// nearbyPlaces is an array whose entries of the form:
// { i : <googl_place_id>, ... }
export function* nearbySaga(nearbyPlaces) {
  for (let loc in nearbyPlaces) {
    
  }
}
