import { connect } from 'react-redux'

import PlacesListView from './PlacesListView.js'
//import ReadOnlyPlaceView from './ReadOnlyPlaceView.js';
import * as factory from './PlacesActions.js'

const mapStateToProps = (state) => {
  return {
    places: state.places
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
