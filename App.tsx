import React from 'react';
import {View, StyleSheet} from 'react-native';

import {init} from '@noriginmedia/norigin-spatial-navigation';
import {Colors} from './src/config/colors';
import Button from './src/components/Button';

init({
  // options
});

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Click me4" onPress={() => console.log('pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});

export default App;
