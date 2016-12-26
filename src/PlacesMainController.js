import React, { Component, PropTypes } from 'react'
import PlacesListView from './PlacesListView'
import { NavigatorIOS, StyleSheet } from 'react-native';
import RNGooglePlacePicker from 'react-native-google-place-picker';

import * as factory from './PlacesActions.js'
import EditPlaceView from './EditPlaceView.js'
import ReadOnlyPlaceView from './ReadOnlyPlaceView.js'
import InteractivePlacesList from './InteractivePlacesList.js'

// Main tab view controller for the places app

export default class PlacesMainController extends Component {

  // must declare this to be able to access the 'store' property
  static contextTypes = {
    store: PropTypes.object.isRequired
  }

  // invoked when the 'Add' right button is clicked
  _addClicked = () => {
    RNGooglePlacePicker.show((response) => {
      if (response.didCancel) {
        console.log('User cancelled GooglePlacePicker');
      }
      else if (response.error) {
        console.log('GooglePlacePicker Error: ', response.error);
      }
      else {
        // send the location to redux store
        let store = this.context.store

        store.dispatch(factory.createSelectLocationAction(response))

        console.log("State:" + JSON.stringify(store.getState()))

        this.refs.navigator.push({
          component: EditPlaceView,
          title: store.getState().newPlace.location.name,
          leftButtonTitle: 'Cancel',
          onLeftButtonPress: () => {
            this.refs.navigator.pop()
          },
          passProps: {
            place : store.getState().newPlace
          }
        });
      }
    })
  }

  // handles item selection from the list
  _itemClicked = (index) => {
    let store = this.context.store

    store.dispatch(factory.createSelectPlaceAction(index))
    console.log(JSON.stringify(store.getState()))
    let selectedPlace = store.getState().places[store.getState().nav.selectedIndex]

    this.refs.navigator.push({
      title: selectedPlace.name,
      component: ReadOnlyPlaceView,
      rightButtonTitle: 'Edit',
      passProps: {
        place : selectedPlace
      }
    });
  }

  // renders the roote view
  render() {
    console.log("Context" + this.context)
    return (
      <NavigatorIOS ref="navigator"
        style={{flex:1}}
        initialRoute={{
          component: InteractivePlacesList,
          passProps: {
            itemClickHandler: this._itemClicked
          },
          title: 'My Places',
          rightButtonTitle: 'Add',
          onRightButtonPress: () => {
            this._addClicked()
          }
        }}
      />
    );
  }
}
