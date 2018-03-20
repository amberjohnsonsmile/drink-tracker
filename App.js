import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';

export default class LandingPage extends Component {
  _onPressButton() {
    Alert.alert('Cheers!')
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.nav}>
          <Text style={styles.title}>sipster</Text>
        </View>
        <View style={styles.main}>
          <Image source={require('./assets/sipster.png')} style={{width: 224, height: 136, marginBottom: 30}} />
          <Button
            onPress={this._onPressButton}
            title="get sippin'"
            color="lightgreen"
          />
        </View>
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
  },
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
