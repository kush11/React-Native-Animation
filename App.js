import React, { PureComponent } from 'react';
import {  View, Text , StyleSheet} from 'react-native';
import Ball from './src/Ball'
class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Ball/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})
export default App;
