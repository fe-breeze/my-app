import React from 'react';
import { StyleSheet, Text, View, Button,Alert } from 'react-native';
import {
  Scene,
  Router,
  Actions,
} from 'react-native-router-flux';
import Hello1 from './Hello1.js'
import Hello2 from './Hello2.js'
import Hello3 from './Hello3'
// import Hello3 from './src/containers/app'
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="hello1" initial={true} component={Hello1} />
          <Scene key="hello2" component={Hello2} title="Hello2" />
          <Scene key="hello3" component={Hello3} title="Hello3" />
        </Scene>
      </Router>
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
