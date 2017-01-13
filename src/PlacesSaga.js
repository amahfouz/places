// Sagas (long-running functions) for location processing

import { put, take, call } from 'redux-saga/effects'
import { channel } from 'redux-saga'

// single entry point to start all sagas at once
export function* rootSaga() {
  console.log("Initializing location consumer.");
  const ch = yield call(createLocationChannel)

  while (true) {
    const pos = yield take(ch)
    yield put({type : "some action type", position : pos})
  }
}

// registers a listener with the platform location service
// regular function
function createLocationChannel() {

  console.log("Creating the channel.")
  let locationChannel = channel()

  // register the GPS listener
  navigator.geolocation.watchPosition((position) => {
    console.log("Putting event on channel.")
    locationChannel.put(position)
  });

  return locationChannel
}
