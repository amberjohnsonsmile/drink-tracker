import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>&copy;2018 Amber Johnson</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://amberjohnsonsmile.co/')}
        >
          <Image
            source={require('./assets/drink.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
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
