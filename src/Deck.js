import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

class Deck extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
  }
}

export default Deck;
