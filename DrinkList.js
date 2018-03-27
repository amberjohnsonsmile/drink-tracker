import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Footer from './Footer';

export default class DrinkList extends Component {
  constructor(props) {
    super(props);
    this.state = {isLoading: true};
  }

  componentDidMount() {
    return fetch('http://sipster-tracker.herokuapp.com/drinks')
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            isLoading: false,
            drinksData: response.drinks
          },
          function() {}
        );
      })
      .catch(console.error);
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
      <View style={styles.main}>
        <ScrollView>
          <Text style={styles.history}>drink history</Text>
          <View style={styles.list}>
            <View style={styles.listContainer}>
              <FlatList
                data={this.state.drinksData}
                renderItem={({item}) => (
                  <View style={styles.itemContainer}>
                    <Text style={styles.date}>{item.dateString}:</Text>
                    <Text style={styles.drinks}>{item.drinks}</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index}
              />
            </View>
          </View>
          <Footer />
        </ScrollView>
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
  main: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  history: {
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    color: 'lightgreen',
    paddingTop: 40,
    paddingBottom: 30
  },
  listContainer: {
    alignItems: 'center'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingRight: 20
  },
  date: {
    fontSize: 18
  },
  drinks: {
    paddingLeft: 12,
    fontSize: 26,
    fontWeight: 'bold'
  },
  list: {
    paddingBottom: 50
  }
});
