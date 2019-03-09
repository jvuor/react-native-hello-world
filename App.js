import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  addButton = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  reduceButton = () => {
    this.setState({ clicks: this.state.clicks - 1});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello world</Text>
        <Text>{this.state.clicks}</Text>
        <Button title='add me' color='#f00' onPress={this.addButton} />
        <Button title='reduce me' color='#00f' onPress={this.reduceButton} />
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
