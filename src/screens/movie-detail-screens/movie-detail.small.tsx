// Todo This needs to be removed and use a shared

import React from 'react';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Text } from '../../components/texts';
import { Button } from '../../components/buttons/button.component';

console.log(Platform.OS);

const { height } = Dimensions.get('screen');

const colors = [
  'rgba(0,0,0,1)',
  'rgba(0,0,0,0.9)',
  'rgba(0,0,0,0.3)',
  'transparent',
];

const ShowCaseContainer = styled.View``;

const ImageBackground = styled.ImageBackground`
  height: ${height}px;
  width: 100%;
`;

const LinearGradientContainer = styled<any>(LinearGradient)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-end;
`;

const MovieContainer = styled.View`
  margin-bottom: 100px;
  padding-left: 25px;
  padding-right: 25px;
`;

const MovieTitleContainer = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const MovieDetailContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const imageUrl = {
  uri: 'https://res.cloudinary.com/moviedeeptest/image/upload/v1667097769/canva-simple-photocentric-romance-of-love-movie-poster-De4Pnype7jE_vzihdd.jpg',
};

export const MovieDetailScreenSmall = () => {
  return (
    <ShowCaseContainer>
      <ImageBackground source={imageUrl}>
        <LinearGradientContainer
          start={{ x: 1, y: 1 }}
          end={{ x: 1, y: 0 }}
          colors={colors}>
          <MovieContainer>
            <MovieTitleContainer>
              <Text>Ninnu Kori</Text>
            </MovieTitleContainer>
            <MovieDetailContainer>
              <Text>Thriller</Text>
              <Button>Play</Button>
              <Text>2020</Text>
            </MovieDetailContainer>
          </MovieContainer>
        </LinearGradientContainer>
      </ImageBackground>
    </ShowCaseContainer>
  );
};
