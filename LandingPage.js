import React, {Component} from 'react';
import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Footer from './Footer';
import NavBar from './NavBar';

export default class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.main}>
          <Image source={require('./assets/sipster.png')} style={styles.logo} />
          <Text style={styles.taglineOne}>Track daily intake. Set goals.</Text>
          <Text style={styles.taglineTwo}>
            Increase awareness, increase health.
          </Text>
          <Button
            onPress={Actions.adddrink}
            title="get sippin'"
            color="lightgreen"
          />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 224,
    height: 136,
    marginBottom: 30,
    marginTop: -30
  },
  taglineOne: {
    textAlign: 'center'
  },
  taglineTwo: {
    textAlign: 'center',
    marginBottom: 30
  }
});
