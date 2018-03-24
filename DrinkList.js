import React, { Component } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';

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
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }
    
    return(
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          /*{[
            {key: 'Friday, March 2', drinks: 3},
            {key: 'Thursday, March 8', drinks: 1},
            {key: 'Friday, March 9', drinks: 3},
            {key: 'Sunday, March 11', drinks: 1},
            {key: 'Tuesday, March 13', drinks: 3},
            {key: 'Friday, March 16', drinks: 3},
            {key: 'Saturday, March 17', drinks: 1},
            {key: 'Sunday, March 18', drinks: 1}
          ]}*/
          renderItem={({item}) =>
            <View style={styles.itemContainer}>
              <Text style={styles.date}>{item.date}:</Text>
              <Text style={styles.drinks}>{item.drinks}</Text>
            </View>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingLeft: 50
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
