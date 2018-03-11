import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {
  Scene,
  Router,
  Actions,
} from 'react-native-router-flux';

export default class Hello extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello1</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Button title="Go to Hello2" onPress={Actions.hello2} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'#ff0000',
    fontSize: 40
  }
});
