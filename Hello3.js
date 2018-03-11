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
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Button title="Go to hello1" onPress={Actions.hello1} />
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
});
