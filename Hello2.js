import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Hello extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hello2</Text>
        <Button title="Go to Hello3" onPress={Actions.hello3} />
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
  title: {
    color: '#ff0000',
    fontSize: 40
  }
});
