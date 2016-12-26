import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import { Content, List, ListItem, Text, Button } from 'native-base';

// read-only view showing properties of a place
export default class ReadOnlyPlaceView extends Component {
  static propTypes = {
    place : PropTypes.object.isRequired
  }

  render() {
    return (
      <ScrollView>
        <Content>
            <List>
              <ListItem>
                <Text>{this.props.place.notes}</Text>
              </ListItem>
            </List>
        </Content>
        <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
          Edit
        </Button>
      </ScrollView>
    );
  }
}
