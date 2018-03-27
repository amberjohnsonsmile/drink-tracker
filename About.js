import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Footer from './Footer';
import NavBar from './NavBar';

export default class LandingPage extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <NavBar />
        <View style={styles.main}>
          <ScrollView>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.about}>about sipster</Text>
              <Image
                source={require('./assets/drink.png')}
                style={{width: 100, height: 140}}
              />
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
              <Text style={styles.about}>about the developer</Text>
              <Image
                source={require('./assets/drink.png')}
                style={{width: 100, height: 140}}
              />
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </Text>
              <Footer />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 8,
    alignItems: 'center'
  },
  about: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 40,
    paddingBottom: 30
  }
});
