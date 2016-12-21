import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { Content, List, ListItem, Text } from 'native-base';

import PlacesService from './PlacesService.js';

// view for editing properties of a place
export default class ReadOnlyPlaceView extends Component {
  static propTypes = {
    placeIndex : PropTypes.number.isRequired
  }

  render() {
    let service = new PlacesService();
    let place = service.getByIndex(this.props.placeIndex);

    return (
      <ScrollView>
        <Content>
            <List>
              <ListItem>
                <Text>{place.notes}</Text>
              </ListItem>
            </List>
        </Content>
      </ScrollView>
    );
  }
}
