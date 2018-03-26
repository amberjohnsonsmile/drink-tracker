import React, {Component} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import NavBar from './NavBar';

export default class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addingGoal: false,
      isLoading: true,
      goalAdded: false,
      text: ''
    };
  }

  createGoal = () => {
    this.setState({addingGoal: true});
  };

  addGoal = () => {
    Alert.alert(this.state.text);
    fetch('http://sipster-tracker.herokuapp.com/goals', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        goal: this.state.text
      })
    })
      .then(() => {
        this.setState({
          goalAdded: true
        });
      })
      .catch(console.error);
  };

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
          {this.state.addingGoal ? (
            <TextInput
              style={styles.text}
              placeholder="Enter a new goal"
              onChangeText={text => this.setState({text})}
              onSubmitEditing={this.addGoal}
            />
          ) : (
            <Button
              onPress={this.createGoal}
              title="Create new goal"
              color="lightgreen"
            />
          )}

          <Text style={styles.goals}>current goals</Text>
          <View style={styles.listContainer}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: 'white'
  },
  text: {
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 10,
    alignSelf: 'stretch'
  },
  goals: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 50
  },
  listContainer: {
    flexDirection: 'row',
    paddingRight: 45,
    paddingLeft: 45,
    paddingTop: 30
  },
  listItem: {
    flexDirection: 'row',
    alignSelf: 'center',
    padding: 20
  },
  listText: {
    fontSize: 16,
    paddingLeft: 10
  }
});
