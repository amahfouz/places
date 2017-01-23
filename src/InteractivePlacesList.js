import { connect } from 'react-redux'

import PlacesListView from './PlacesListView.js'
//import ReadOnlyPlaceView from './ReadOnlyPlaceView.js';
import * as factory from './PlacesActions.js'

const mapStateToProps = (state) => {
  return {
    places: state.places,
    isNearBy: function(google_place_id) {
      return state.nearbyPlaces.has(google_place_id)
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    itemClickHandler: ownProps.itemClickHandler
  }
}

const InteractivePlacesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlacesListView)

export default InteractivePlacesList
