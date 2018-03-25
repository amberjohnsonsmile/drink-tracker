import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

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
            dataSource: response.drinks
          },
          function() {}
        );
      })
      .catch(console.error);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text style={styles.date}>{item.dateString}:</Text>
              <Text style={styles.drinks}>{item.drinks}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 22
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  date: {
    fontSize: 18
  },
  drinks: {
    paddingLeft: 12,
    fontSize: 26,
    fontWeight: 'bold'
  }
});
