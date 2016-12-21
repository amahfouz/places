import React, { Component } from 'react';
import PlacesListView from './PlacesListView';
import { NavigatorIOS, StyleSheet } from 'react-native';

// Main tab view controller for the places app

export default class PlacesMainController extends Component {
  render() {
    return (
      <NavigatorIOS style={{flex:1}}
        initialRoute={{
          component: PlacesListView,
          title: 'My Places',
          rightButtonTitle: 'Add'
        }}
      />
    );
  }
}
