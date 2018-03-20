import React, { Component } from 'react';
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Calendar from './Calendar';
import LandingPage from './LandingPage';
import NavBar from './NavBar';

const App = () => {
  return (
    <Router>
      <Stack key="root" hideNavBar={true}>
        <Scene key="landingpage"
          component={LandingPage}
          title="sipster"
          initial
        />
        <Scene key="calendar"
          component={Calendar}
          title="Calendar"
        />
      </Stack>
    </Router>
  );
}

export default App;
