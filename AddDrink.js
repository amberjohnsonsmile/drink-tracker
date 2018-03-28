import React, {Component} from 'react';
import {
  Alert,
  Button,
  DatePickerAndroid,
  DatePickerIOS,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Footer from './Footer';
import NavBar from './NavBar';

export default class AddDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spinnerDate: new Date(),
      drinkAdded: false,
      drinkDeleted: false
    };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({spinnerDate: newDate});
  }

  addDrink = () => {
    var selectedDate =
      this.state.spinnerDate.toISOString().slice(0, 11) + '00:00:00.000Z';
    fetch('https://sipster-tracker.herokuapp.com/drinks/' + selectedDate)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dailyDrinks: response.drinks.drinks
        });
      })
      .then(() => {
        fetch('https://sipster-tracker.herokuapp.com/drinks/' + selectedDate, {
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
    fetch('https://sipster-tracker.herokuapp.com/drinks/' + selectedDate)
      .then(response => response.json())
      .then(response => {
        this.setState({
          dailyDrinks: response.drinks.drinks
        });
      })
      .then(() => {
        fetch('https://sipster-tracker.herokuapp.com/drinks/' + selectedDate, {
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
      <View style={styles.container}>
        <NavBar />
        <View style={styles.main}>
          {Platform.OS === 'android' && (
            <Text style={styles.date}>
              {this.state.spinnerDate.toDateString()}
            </Text>
          )}

          {Platform.OS === 'ios' ? (
            <View style={styles.pickerIOS}>
              <DatePickerIOS
                date={this.state.spinnerDate}
                mode="date"
                onDateChange={this.setDate}
              />
            </View>
          ) : (
            <TouchableOpacity
              onPress={this.showPicker.bind(this, 'spinner', {
                date: this.state.presetDate
              })}>
              <Text style={styles.select}>select another date</Text>
            </TouchableOpacity>
          )}

          <View style={styles.buttons}>
            <Button
              onPress={this.addDrink}
              title="Add drink"
              color="lightgreen"
            />
            {this.state.drinkAdded && (
              <Text style={styles.confirmed}>drink added!</Text>
            )}

            <View style={styles.spacer} />

            <Button
              onPress={this.deleteDrink}
              title="Delete drink"
              color="lightgreen"
            />
            {this.state.drinkDeleted && (
              <Text style={styles.confirmed}>drink deleted!</Text>
            )}
          </View>
          <Image source={require('./assets/drink.png')} style={styles.image} />
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  main: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  buttons: {
    alignItems: 'stretch'
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
  confirmed: {
    alignSelf: 'center'
  },
  image: {
    width: 100,
    height: 140,
    marginTop: 50
  },
  spacer: {
    height: Platform.OS === 'android' ? 20 : 0
  },
  pickerIOS: {
    alignSelf: 'stretch'
  }
});
