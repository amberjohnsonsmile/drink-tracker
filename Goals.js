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
  TouchableOpacity,
  View
} from 'react-native';
import Footer from './Footer';
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
          goalAdded: true,
          addingGoal: false
        });
      })
      .then(this.getGoals)
      .catch(console.error);
  };

  getGoals = () => {
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
  };

  deleteGoal = (item, event) => {
    fetch('http://sipster-tracker.herokuapp.com/goals/' + item.id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.getGoals)
      .catch(console.error);
  };

  componentDidMount() {
    this.getGoals();
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
          <ScrollView>
            <View style={styles.spacer} />
            {this.state.addingGoal ? (
              <TextInput
                style={styles.text}
                placeholder="Enter a new goal"
                onChangeText={text => this.setState({text})}
                onSubmitEditing={this.addGoal}
              />
            ) : (
              <View style={{alignItems: 'center'}}>
                <Button
                  onPress={this.createGoal}
                  title="Create new goal"
                  color="lightgreen"
                />
              </View>
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

                    <TouchableOpacity
                      onPress={event => this.deleteGoal(item, event)}>
                      <Image
                        source={require('./assets/delete.png')}
                        style={{width: 20, height: 20, marginLeft: 10}}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          <Footer />
          </ScrollView>
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
  spacer: {
    height: 50
  },
  text: {
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch'
  },
  goals: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 50,
    alignSelf: 'center'
  },
  listContainer: {
    flexDirection: 'row'
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 20,
    paddingLeft: 60,
    paddingRight: 60
  },
  listText: {
    fontSize: 16,
    paddingLeft: 10
  }
});
