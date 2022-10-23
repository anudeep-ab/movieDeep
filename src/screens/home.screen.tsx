import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { Button } from '../components/button.component';
import { Text } from '../components/text.component';

const HomeContainer = styled.View`
  flex: 1;
`;
export const HomeScreen: FunctionComponent = () => {
  return (
    <HomeContainer>
      <Text>Hello</Text>
      <Button onPress={() => console.log('pressed')}>Click me</Button>
    </HomeContainer>
  );
};
