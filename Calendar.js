import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import NavBar from './NavBar';

export default class Calendar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text>Calendar page!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
