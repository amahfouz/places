import locationSaga from './CaptureLocationSaga.js'
import nearbySaga from './NearbySaga.js'

// Saga to compose all Sagas

export function *rootSaga() {
  yield [
    locationSaga(),
    nearbySaga()
  ]
}

export default function initSagas(sagaMiddleware) {
  console.log("Starting sagas.")
  // start the places processor

  const rootTask = sagaMiddleware.run(rootSaga)

  rootTask.done.catch(function(error) {
    console.log("Global catch: " + error)
  })
}
