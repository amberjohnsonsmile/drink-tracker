import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>&copy;2018 Amber Johnson</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'flex-end'
  }
});
