import React, { Component, PropTypes } from 'react'
import { ListItem, Icon, Text } from 'native-base'

// List item for a place

export default class PlaceListItem extends Component {
  
  static propTypes = {
    place : PropTypes.object.isRequired,
    index : PropTypes.number.isRequired,
    clickHandler : PropTypes.func.isRequired
  }

  render() {
    let icon = this.props.place.icon
        ? this.props.place.icon
        : 'ios-navigate'

    return (
          <ListItem iconLeft
                    button
                    onPress={this.props.clickHandler.bind(this, this.props.index)}>
            <Icon name={icon}/>
            <Text>{this.props.place.name}</Text>
          </ListItem>
    );
  }
}
