import React from 'react';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Button } from '../components/buttons';
import { scalableSize } from '../utils/scalable-size.util';
import { Text } from '../components/texts';

console.log(Platform.OS);

const { height } = Dimensions.get('window');
const colors = [
  'rgba(0,0,0,1)',
  'rgba(0,0,0,1)',
  'rgba(0,0,0,0.8)',
  'rgba(0,0,0,0.3)',
  'transparent',
];

const ShowCaseContainer = styled.View``;

const ImageBackground = styled.ImageBackground`
  height: ${height / 1.7}px;
`;

const LinearGradientContainer = styled<any>(LinearGradient)`
  flex: 1;
  padding-left: ${scalableSize(15, false)};
  padding-right: ${scalableSize(15, false)};
  justify-content: flex-end;
`;

const MovieDetailContainer = styled.View`
  width: ${scalableSize(600, false)};
  margin-bottom: ${scalableSize(18, false)};
  padding-left: ${scalableSize(40, false)};
`;

const imageUrl = {
  uri: 'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975239/Khaidi_cover.jpg',
};

export const ShowCaseScreenLarge = () => {
  return (
    <ShowCaseContainer>
      <ImageBackground source={imageUrl} resizeMode="cover">
        <LinearGradientContainer
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={colors}>
          <MovieDetailContainer>
            <Text large>Khaidi</Text>
            <Text>
              In 2004, a brutal predator was lynched in a courtroom. This is the
              story of the community he terrorized — and the vengeance they
              unleashed.In 2004, a brutal predator was lynched in a courtroom.
              This is the story of the community he terrorized — and the
              vengeance they unleashed.
            </Text>
            <Button>Play</Button>
          </MovieDetailContainer>
        </LinearGradientContainer>
      </ImageBackground>
    </ShowCaseContainer>
  );
};
