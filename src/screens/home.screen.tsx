import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button } from '../components/button.component';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
      <Button>Button 4</Button>
    </SafeAreaView>
  );
};
