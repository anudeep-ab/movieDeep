import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme as AppTheme } from './src/config/theme';
import { navigationTheme } from './src/navigation/navigationTheme';
import { HomeNavigator } from './src/navigation/HomeNavigator';

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const App = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <ThemeProvider theme={AppTheme}>
        <AppContainer>
          <HomeNavigator />
        </AppContainer>
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
