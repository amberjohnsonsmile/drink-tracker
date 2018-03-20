import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <Text style={styles.title}>sipster</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  title: {
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  }
});
