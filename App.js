import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import About from './About';
import AddDrink from './AddDrink';
import Calendar from './Calendar';
import Goals from './Goals';
import LandingPage from './LandingPage';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="landingpage"
          component={LandingPage}
          title="landing page"
          initial
        />
        <Scene key="adddrink"
          component={AddDrink}
          title="add drink"
        />
        <Scene key="calendar"
          component={Calendar}
          title="history"
        />
        <Scene key="goals"
          component={Goals}
          title="goals"
        />
        <Scene key="about"
          component={About}
          title="about"
        />
      </Stack>
    </Router>
  );
}

export default App;
