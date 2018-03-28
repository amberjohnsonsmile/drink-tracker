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
    fetch('https://sipster-tracker.herokuapp.com/goals', {
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
    return fetch('https://sipster-tracker.herokuapp.com/goals')
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
    fetch('https://sipster-tracker.herokuapp.com/goals/' + item.id, {
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
        <View style={styles.loading}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
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
              <View style={styles.button}>
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
                      style={styles.drink}
                    />

                    <Text style={styles.listText}>{item.goal}</Text>

                    <TouchableOpacity
                      onPress={event => this.deleteGoal(item, event)}>
                      <Image
                        source={require('./assets/delete.png')}
                        style={styles.delete}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          </ScrollView>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 8,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container: {
    flex: 1
  },
  main: {
    flex: 8,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
  spacer: {
    height: 50
  },
  button: {
    alignItems: 'center'
  },
  text: {
    height: 40,
    marginRight: 40,
    marginLeft: 40,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'gray'
  },
  goals: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 50,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  drink: {
    width: 36,
    height: 50
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
  },
  delete: {
    width: 20,
    height: 20,
    marginLeft: 10
  }
});
