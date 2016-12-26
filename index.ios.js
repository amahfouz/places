import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import PlacesMainController from './src/PlacesMainController.js'
import placesState from './src/PlacesReducer.js'
import InteractivePlacesList from './src/InteractivePlacesList'

const initialPlaces = [
  {
    'name'  : 'Costco',
    'notes' : 'Kitchen Towels\nBottled Water\nBananas',
    'icon'  : 'ios-person'
  },
  {
    'name'  : 'Ralph',
    'notes' : 'Pickup medication\n Diet Coke\n Stamps',
    'icon'  : 'ios-settings'
  }
];

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
