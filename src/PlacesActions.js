// actions for modifying the redux store

export const ADD_PLACE = 'add-place-action-type'
export const SELECT_PLACE = 'select-place-action-type'
export const PICK_LOCATION = 'select-location'
export const CAPTURE_GEO_POSITION = 'record-geo-position'
//export const CAPTURE_NEARBY_PLACES = 'capture-nearby_places'

export function createAction(actionType, actionData) {
  return {
    type: actionType,
    data: actionData
  }
}
export function createSelectPlaceAction(selectedIndex) {
  return {
    type: SELECT_PLACE,
    index: selectedIndex
  }
}

export function createAddPlaceAction(placeObj) {
  // action to add a place
  return {
    type : ADD_PLACE,
    place: placeObj
  }
}

export function createSelectLocationAction(locationObj) {
  // action to set location of new place
  return {
    type : PICK_LOCATION,
    location : locationObj
  }
}

export function createGeoCaptureAction(geoPosition) {
  // action triggered upon capturing the geo location
  return {
    type : CAPTURE_GEO_POSITION,
    position : geoPosition
  }
}
