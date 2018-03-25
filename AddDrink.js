import React, {Component} from 'react';
import {
  Alert,
  Button,
  DatePickerAndroid,
  Image,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';

export default class AddDrink extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addDrink = () => {
    Alert.alert(this.state.newState);
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
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View>
        <Button
          onPress={this.showPicker.bind(this, 'spinner', {
            date: this.state.presetDate
          })}
          title="Select date"
          color="lightgreen"
        />
        <Button onPress={this.addDrink} title="Add drink" color="lightgreen" />
      </View>
    );
  }
}
