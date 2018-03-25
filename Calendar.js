import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import AddDrink from './AddDrink';
import DrinkList from './DrinkList';
import NavBar from './NavBar';

export default class Calendar extends Component {
  render() {
    return (
      <ScrollView>
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
            <AddDrink />
          </View>
        </View>
      </ScrollView>
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
