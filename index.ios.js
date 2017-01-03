import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import Place from './src/Place.js'
import PlacesMainController from './src/PlacesMainController.js'
import placesState from './src/PlacesReducer.js'

const initialPlace = new Place({});
initialPlace.name  = 'Costco';
initialPlace.notes = 'Kitchen Towels\nBottled Water\nBananas'
const initialPlaces = [ initialPlace ];

// create a redux store
const store = createStore(placesState, { places: initialPlaces });

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
