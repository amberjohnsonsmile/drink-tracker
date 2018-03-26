import React, {Component} from 'react';
import {
  Alert,
  Button,
  DatePickerAndroid,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import NavBar from './NavBar';

export default class AddDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerDate: new Date(),
      drinkAdded: false,
      drinkDeleted: false
    };
  }

  addDrink = () => {
    var selectedDate =
      this.state.spinnerDate.toISOString().slice(0, 11) + '00:00:00.000Z';
    fetch('http://sipster-tracker.herokuapp.com/drinks/' + selectedDate)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dailyDrinks: response.drinks.drinks
        });
      })
      .then(() => {
        fetch('http://sipster-tracker.herokuapp.com/drinks/' + selectedDate, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            drinks: this.state.dailyDrinks + 1
          })
        })
          .then(() => {
            this.setState({
              drinkAdded: true
            });
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  deleteDrink = () => {
    var selectedDate =
      this.state.spinnerDate.toISOString().slice(0, 11) + '00:00:00.000Z';
    fetch('http://sipster-tracker.herokuapp.com/drinks/' + selectedDate)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dailyDrinks: response.drinks.drinks
        });
      })
      .then(() => {
        fetch('http://sipster-tracker.herokuapp.com/drinks/' + selectedDate, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            drinks: this.state.dailyDrinks - 1
          })
        })
          .then(() => {
            this.setState({
              drinkDeleted: true
            });
          })
          .catch(console.error);
      })
      .catch(console.error);
  };

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        // <<<< Newly selected date >>>>
        var date = new Date(year, month, day);
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <NavBar />
        <View style={styles.main}>
          <Text style={styles.date}>{this.state.spinnerDate.toDateString()}</Text>
          <TouchableOpacity
            onPress={this.showPicker.bind(this, 'spinner', {
              date: this.state.presetDate
            })}>
            <Text style={styles.select}>select another date</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'stretch'}}>
            <Button
              onPress={this.addDrink}
              title="Add drink"
              color="lightgreen"
            />
            {this.state.drinkAdded && <Text>drink added!</Text>}

            <View style={styles.spacer} />

            <Button
              onPress={this.deleteDrink}
              title="Delete drink"
              color="lightgreen"
            />
            {this.state.drinkDeleted && <Text>drink deleted!</Text>}
          </View>
          <Image
            source={require('./assets/drink.png')}
            style={{width: 100, height: 140, marginTop: 50}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  date: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen'
  },
  select: {
    fontSize: 16,
    paddingBottom: 60
  },
  spacer: {
    height: 20
  }
});
