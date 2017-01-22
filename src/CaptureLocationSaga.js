// Sagas (long-running functions) for location processing

import { put, take, call } from 'redux-saga/effects'
import { channel } from 'redux-saga'
import { Geo } from 'geo-nearby'

import { nearbySaga } from './NearbySaga.js'

// single entry point to start all sagas at once
export default function* locationSaga() {
  console.log("Initializing location consumer.");
  const ch = yield call(createLocationChannel)

  while (true) {
    const loc = yield take(ch)

    // see geo-nearby module for docs
    const locations = places.map((item) => {
      let loc = item.location;
      return [loc.latitude, loc.longitude, loc.google_id]
    })

    const geoData = new Geo(Geo.createCompactSet(locations));

    // find places within 200 meters
    const nearbyPlaces = geoData.nearby(loc.latitude, loc.longitude, 200);

    yield call(nearbySaga, nearbyPlaces)
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
