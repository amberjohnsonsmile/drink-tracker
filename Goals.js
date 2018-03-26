import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavBar from './NavBar';

export default class Goals extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text style={styles.goals}>goals</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/drink.png')}
              style={{width: 20, height: 30}}
            />
            <Text>Drink water between every drink</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/drink.png')}
              style={{width: 20, height: 30}}
            />
            <Text>Drink water between every drink</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  goals: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 40,
    paddingBottom: 40
  }
});
