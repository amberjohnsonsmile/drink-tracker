import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class NavBar extends Component {
  render() {
    return (
      <View style={styles.nav}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={Actions.adddrink}> 
            <Text style={styles.link}>add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.calendar}> 
            <Text style={styles.link}>history</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.goals}> 
            <Text style={styles.link}>goals</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.about}> 
            <Text style={styles.link}>about</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={Actions.landingpage}> 
          <Text style={styles.title}>sipster</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: 'lightgreen'
  },
  link: {
    paddingBottom: 10,
    paddingLeft: 10,
    fontSize: 16,
    color: 'white'
  },
  title: {
    paddingBottom: 10,
    paddingRight: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  }
});
