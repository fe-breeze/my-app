import React,{
    Component
} from 'react'
import {
    View,
    Text,
    Button,
    StyleSheet,
} from 'react-native'
import {Actions} from 'react-native-router-flux';

export default class Message extends Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.title}>message</Text>
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
  title: {
    color: '#ff0000',
    fontSize: 40
  }
});
