// Sagas (long-running functions) for location processing

import { put, take, call, select } from 'redux-saga/effects'
import { channel } from 'redux-saga'
import Geo from 'geo-nearby'

import nearbySaga from './NearbySaga.js'

// single entry point to start all sagas at once
export default function* locationSaga() {
  console.log("Initializing location consumer.");
  const ch = yield call(createLocationChannel)

  while (true) {
    const curLoc = yield take(ch)
    const curCoords = curLoc.coords

    let state = yield select()

    if (! state.places)
       continue;
    // see geo-nearby module for docs
    console.log("Places to locate: " + JSON.stringify(state.places))
    const locations = []
    for (let place of state.places) {
      console.log("Place to locate: " + JSON.stringify(place))
      let loc = place.location;
      console.log("Location: " + JSON.stringify(loc))
      locations.push([loc.latitude, loc.longitude, loc.google_id])
    }

    console.log("Locations: " + JSON.stringify(locations))

    const geoDataSet = Geo.createCompactSet(locations);
    const geoData = new Geo(geoDataSet, { sorted: true });

    // find places within 200 meters
    console.log("Current location: " + JSON.stringify(curCoords))
    const nearbyPlaces = geoData.nearBy(curCoords.latitude, curCoords.longitude, 200);
    console.log("Nearby computed: " + JSON.stringify(nearbyPlaces))
    yield call(nearbySaga, nearbyPlaces)
  }
}

// registers a listener with the platform location service
// regular function
// Structure of 'position' is
// {
//   "coords":
//    {"speed":-1,"longitude":-118,"latitude":34.003,"accuracy":5,"heading":-1,"altitude":0,"altitudeAccuracy":-1},
//  "timestamp":1485143525214.65
// }
//
function createLocationChannel() {

  console.log("Creating the channel.")
  let locationChannel = channel()

  console.log("Registering GPS listener.")
  // register the GPS listener
  navigator.geolocation.watchPosition((position) => {
    console.log("Putting event on channel.")
    locationChannel.put(position)
  });

  return locationChannel
}
