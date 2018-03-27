import React, {Component} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.copyright}>&copy;2018 Amber Johnson</Text>
        <View style={styles.links}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://amberjohnsonsmile.co/')}>
            <Image
              source={require('./assets/website.png')}
              style={styles.flaticon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://github.com/amberjohnsonsmile')
            }>
            <Image
              source={require('./assets/github.png')}
              style={styles.flaticon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/amberjohnsonsmile/')
            }>
            <Image
              source={require('./assets/linkedin.png')}
              style={styles.flaticon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('mailto:amberjohnsonsmile@gmail.com')
            }>
            <Image
              source={require('./assets/email.png')}
              style={styles.flaticon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  copyright: {
    paddingLeft: 10,
    paddingBottom: 10
  },
  links: {
    flexDirection: 'row'
  },
  flaticon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginBottom: 10
  }
});
