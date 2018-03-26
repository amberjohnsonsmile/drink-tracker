import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavBar from './NavBar';

export default class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://sipster-tracker.herokuapp.com/goals')
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            isLoading: false,
            goalsData: response.goals
          },
          function() {}
        );
      })
      .catch(console.error);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text style={styles.goals}>goals</Text>
          <View style={styles.listItem}>
            <Image
              source={require('./assets/drink.png')}
              style={{width: 36, height: 50}}
            />
            <Text style={styles.listText}>Drink water between every drink</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/drink.png')}
              style={{width: 36, height: 50}}
            />
            <Text style={styles.listText}>Eat before drinking</Text>
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
  },
  listItem: {
    flexDirection: 'row',
    padding: 20
  },
  listText: {
    fontSize: 16,
    padding: 10
  }
});
