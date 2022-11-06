import React from 'react';
import { ScrollView } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import { theme as AppTheme } from './src/config/theme';
import { HomeScreen } from './src/screens/home.screen';

const AppContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <AppContainer>
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
