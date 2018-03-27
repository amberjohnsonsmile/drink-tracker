import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Footer from './Footer';
import NavBar from './NavBar';

export default class LandingPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <View style={styles.main}>
          <ScrollView>
            <View style={styles.scroll}>
              <Text style={styles.about}>about sipster</Text>
              <Image
                source={require('./assets/drink.png')}
                style={styles.drinkImage}
              />
              <Text style={styles.content}>
                With ample opportunities for free drinks in the tech community,
                it can be easy to lose track of just how much alcohol you're
                consuming. Sipster tracks your daily intake and allows you to
                set goals for your health. Sipster is built on React Native,
                Express, Node, Knex.js, and PostgeSQL.
              </Text>
              <Text style={styles.about}>about the developer</Text>
              <Image
                source={require('./assets/headshot.jpg')}
                style={styles.headshot}
              />
              <Text style={styles.content}>
                Amber Johnson is a full stack web developer based in Denver. She
                enjoys building databases, playing the cello, and long-distance
                hiking.
              </Text>
              <View style={styles.spacer} />
            </View>
            <Footer style={{inherit: 'none'}} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  main: {
    flex: 8,
    alignItems: 'center'
  },
  scroll: {
    alignItems: 'center'
  },
  about: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 40,
    paddingBottom: 30
  },
  drinkImage: {
    width: 100,
    height: 140,
    marginBottom: 40
  },
  headshot: {
    width: 140,
    height: 140,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 30
  },
  content: {
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center'
  },
  spacer: {
    height: 60
  }
});
