import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
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
    if (this.state.isLoading) {
      return (
        <View
          style={{flex: 8, justifyContent: 'center', backgroundColor: 'white'}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text style={styles.goals}>goals</Text>
          <FlatList
            data={this.state.goalsData}
            renderItem={({item}) => (
              <View style={styles.listItem}>
                <Image
                  source={require('./assets/drink.png')}
                  style={{width: 36, height: 50}}
                />
                <Text style={styles.listText}>{item.goal}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index}
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
    alignSelf: 'center',
    padding: 20
  },
  listText: {
    fontSize: 16,
    padding: 10
  }
});
