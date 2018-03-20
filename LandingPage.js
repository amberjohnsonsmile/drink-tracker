import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import NavBar from './NavBar';

export default class LandingPage extends Component {
  _onPressButton() {
    Alert.alert('Cheers!')
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavBar />
        <View style={styles.main}>
          <Image source={require('./assets/sipster.png')} style={{width: 224, height: 136, marginBottom: 30}} />
          <Button
            onPress={Actions.calendar}
            title="get sippin'"
            color="lightgreen"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
