import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { Content, List, ListItem, Text, Input, InputGroup } from 'native-base';

// view for editing properties of a place
export default class EditPlaceView extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  }

  render() {
    return (
      <ScrollView>
          <Text>{this.props.place.name}</Text>
          <InputGroup>
            <Input borderType='regular' value={this.props.place.name} />
          </InputGroup>
      </ScrollView>
    );
  }
}

// place.notes
