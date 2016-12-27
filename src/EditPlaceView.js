import React, { Component, PropTypes } from 'react';
import { ScrollView, Switch } from 'react-native';
import { Content, CheckBox, List, ListItem, Text, Input, InputGroup } from 'native-base';

// view for editing properties of a place
export default class EditPlaceView extends Component {
  static propTypes = {
    place: PropTypes.object.isRequired
  }
  state = {
    isEnabled : true
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem itemDivider>
              <Text>Notes</Text>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input multiline = {true}
                     numberOfLines = {5}
                     style={{height : 200}}
                     value={this.props.place.notes} />
            </InputGroup>
          </ListItem>
          <ListItem>
            <Switch
              value={this.state.isEnabled}
              onValueChange={(value) => this.setState({isEnabled: value})}
              />
            <Text>Enabled</Text>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}

// place.notes
