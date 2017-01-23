import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import Place from './src/Place.js'
import PlacesActions from './src/PlacesActions.js'
import PlacesMainController from './src/PlacesMainController.js'
import createPlacesStore from './src/PlacesReducer.js'

// set up dummy data

const initialPlace = new Place({});
initialPlace.name  = 'Costco';
initialPlace.notes = 'Kitchen Towels\nBottled Water\nBananas'
initialPlace.location = {
  longitude: -118.00,
  latitude: 34.003,
  google_id: 'DFSASSDFAGFHGHDJGJ'
}
const initialPlaces = [ initialPlace ];

// create a redux store
const store = createPlacesStore({
  places: initialPlaces,
  nearbyPlaces: new Set()
});

// entry point
export default class places extends Component {

  render() {
    return (
      <Provider store={store}>
        <PlacesMainController />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('places', () => places);
