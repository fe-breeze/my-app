import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {
  Scene,
  Router,
  Actions,
} from 'react-native-router-flux';
import Hello1 from './Hello1.js';
import Hello2 from './Hello2.js';
import Hello3 from './Hello3.js';
import Message from './Message.js';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="hello1" backTitle="back" initial={true} component={Hello1} />
          <Scene key="hello2" backTitle="back" component={Hello2} title="Hello2" />
          <Scene key="hello3" backTitle="back" component={Hello3} title="Hello3" />
          <Scene key="message" backTitle="back" component={Message} title="message"/>
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
