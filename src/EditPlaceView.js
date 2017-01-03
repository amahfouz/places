import React, { Component, PropTypes } from 'react';
import { ScrollView, Switch, View, TextInput } from 'react-native';
import { Content, CheckBox, List, ListItem, Text,
         Input, InputGroup, Item, Button} from 'native-base';
import ModalPicker from 'react-native-modal-picker'

import Place from './Place.js'

// view for editing properties of a place
export default class EditPlaceView extends Component {

  static propTypes = {
    place: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = props.place.getSimpleProps();
  }

  getResult() {
    let result = new Place(this.props.place.location)
    result.setSimpleProps(this.state)
    return result;
  }

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem itemDivider>
            <Text>Label</Text>
          </ListItem>
            <InputGroup>
              <Input value={this.state.name}
                     onChangeText={(text) => this.setState({name: text})}/>
            </InputGroup>
          <ListItem itemDivider>
            <Text>Notes</Text>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input multiline = {true}
                     numberOfLines = {5}
                     style={{height : 160}}
                     placeholder="Enter notes for this place"
                     value={this.state.notes}
                     onChangeText={(text) => this.setState({notes: text})}/>
            </InputGroup>
          </ListItem>
          <ListItem itemDivider>
            <Text>Trigger</Text>
          </ListItem>
          <ListItem>
              <View style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontWeight:"bold"}}>Notify me when</Text>
                    <ModalPicker data={Place.PROXIMITY__OPTIONS}
                            initValue={Place.PROXIMITY__OPTIONS[1].label}
                            onChange={(option)=>{ this.setState({proximity: option.key })}}/>
              </View>
          </ListItem>
          <ListItem>
            <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
              <Text style={{fontWeight:"bold"}}>Enabled</Text>
              <Switch
                value={this.state.enabled}
                onValueChange={(value) => this.setState({isEnabled: value})}/>

            </View>
          </ListItem>
        </List>
      </ScrollView>
    );
  }
}

// place.notes
