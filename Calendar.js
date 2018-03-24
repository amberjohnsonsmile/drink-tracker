import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import DrinkList from './DrinkList';
import NavBar from './NavBar';

export default class Calendar extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 26,
              fontWeight: 'bold',
              color: 'lightgreen',
              paddingTop: 30
            }}>
            drink history
          </Text>
          <DrinkList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
