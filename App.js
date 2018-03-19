import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class LandingPage extends Component {
  render() {
    return (
      // Header
      // Menu
      // Logo
      // Title


      // Main
      // Logo
      // Tagline
      // Button
      <View style={styles.container}>
        <Image source={require('./assets/martini.png')} style={{width: 100, height: 140}} />
        <Text style={styles.title}>Drinkify</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
  }
});
