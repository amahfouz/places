import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, ScrollView, AlertIOS, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, List, ListItem,
         Footer, FooterTab, Button, Icon, Text, Badge
} from 'native-base';

import ReadOnlyPlaceView from './ReadOnlyPlaceView.js';
import PlacesService from './PlacesService.js';

// list of places

export default class PlacesListView extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }
  static items = (new PlacesService()).getPlaces();

  // handle selection of a row
  _itemClicked = (selectedIndex) => {
    this.props.navigator.push({
      title: PlacesListView.items[selectedIndex].name,
      component: ReadOnlyPlaceView,
      rightButtonTitle: 'Edit',
      passProps: {
        placeIndex : selectedIndex
      }
    });
  }

  render() {
    return (
      <ScrollView>
        <Content>
            <List>
              {
                PlacesListView.items.map( (item, index) =>
                  (<PlaceItem
                      key={index+1}
                      place={item}
                      index={index}
                      clickHandler={this._itemClicked}>
                   </PlaceItem>)
                )
              }
            </List>
        </Content>
      </ScrollView>
    );
  }
}

// List item for a place

class PlaceItem extends Component {
  static propTypes = {
    place : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    clickHandler : PropTypes.func.isRequired
  }

  _itemClicked = () => {
    this.props.clickHandler(this.props.index);
  }

  render() {
    return (
          <ListItem iconLeft
                    button
                    onPress={this._itemClicked}>
            <Icon name={this.props.place.icon}/>
            <Text>{this.props.place.name}</Text>
          </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 80
  }
});
