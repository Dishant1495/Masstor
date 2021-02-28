/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import RootStack from './src/routes/Route';

const App = () => {
  return (
      <React.Fragment>
        <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
          <RootStack />
        </SafeAreaView>
      </React.Fragment>
  );
};

export default App;
