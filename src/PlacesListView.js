import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Container, Content, List } from 'native-base';

import PlaceListItem from './PlaceListItem.js'

// list of places

export default class PlacesListView extends Component {

  static propTypes = {
    places: PropTypes.array.isRequired,
    itemClickHandler: PropTypes.func.isRequired
  }

  render() {
    return (
      <ScrollView>
        <Content>
            <List>
              {
                this.props.places.map( (item, index) =>
                  (<PlaceListItem
                      key={index+1}
                      place={item}
                      index={index}
                      clickHandler={this.props.itemClickHandler}>
                   </PlaceListItem  >)
                )
              }
            </List>
        </Content>
      </ScrollView>
    );
  }
}
