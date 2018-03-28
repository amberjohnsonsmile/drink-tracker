import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Picker,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Footer from './Footer';

export default class DrinkList extends Component {
  constructor(props) {
    const monthNames = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december'
    ];
    const date = new Date();
    const month = monthNames[date.getMonth()];
    super(props);
    this.state = {isLoading: true, month: month};
  }

  componentDidMount() {
    this.getDrinks();
  }

  getDrinks = () => {
    return fetch('https://sipster-tracker.herokuapp.com/' + this.state.month)
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
  };

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
            <Picker
              style={styles.picker}
              selectedValue={this.state.month}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({month: itemValue}, this.getDrinks)
              }>
              <Picker.Item label="January" value="january" />
              <Picker.Item label="February" value="february" />
              <Picker.Item label="March" value="march" />
              <Picker.Item label="April" value="april" />
              <Picker.Item label="May" value="may" />
              <Picker.Item label="June" value="june" />
              <Picker.Item label="July" value="july" />
              <Picker.Item label="August" value="august" />
              <Picker.Item label="September" value="september" />
              <Picker.Item label="October" value="october" />
              <Picker.Item label="November" value="november" />
              <Picker.Item label="December" value="december" />
            </Picker>
            <View style={styles.listContainer}>
              {this.state.drinksData.length < 1 && (
                <View style={styles.noDrinks}>
                  <Image
                    source={require('./assets/drink.png')}
                    style={styles.image}
                  />
                  <Text>No drinks yet!</Text>
                </View>
              )}
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
    paddingTop: 40
  },
  picker: {
    ...Platform.select({
      android: {
        height: 21,
        width: 110,
        alignSelf: 'center',
        marginBottom: 30
      }
    })
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
  },
  image: {
    width: 100,
    height: 140,
    marginBottom: 20
  },
  noDrinks: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Platform.OS === 'android' ? 60 : 20,
    marginBottom: Platform.OS === 'android' ? 120 : 30
  }
});
