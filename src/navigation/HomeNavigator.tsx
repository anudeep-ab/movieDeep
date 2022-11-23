import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home-screens';
import { MovieDetailScreen } from '../screens/movie-detail-screens/movie-detail-screen.platform';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="detail" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
};
