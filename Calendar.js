import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';

import AddDrink from './AddDrink';
import DrinkList from './DrinkList';
import NavBar from './NavBar';

export default class Calendar extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <DrinkList />
      </View>
    );
  }
}
