import React from 'react';
import { Dimensions } from 'react-native';
import { Platform } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { LargeText, SmallText } from '../components/texts';
import { SmallButton } from '../components/buttons';

console.log(Platform.OS);

const { height } = Dimensions.get('screen');
const colors = [
  'rgba(0,0,0,1)',
  'rgba(0,0,0,1)',
  'rgba(0,0,0,0.8)',
  'rgba(0,0,0,0.3)',
  'transparent',
];

const ShowCaseContainer = styled.View``;

const ImageBackground = styled.ImageBackground`
  height: ${height / 1.8}px;
`;

const LinearGradientContainer = styled<any>(LinearGradient)`
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: flex-end;
`;

const MovieDetailContainer = styled.View`
  width: 600px;
  margin-bottom: 18px;
  padding-left: 40px;
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
            <LargeText>Ninnu Kori</LargeText>
            <SmallText>
              In 2004, a brutal predator was lynched in a courtroom. This is the
              story of the community he terrorized — and the vengeance they
              unleashed.In 2004, a brutal predator was lynched in a courtroom.
              This is the story of the community he terrorized — and the
              vengeance they unleashed.
            </SmallText>
            <SmallButton>Play</SmallButton>
          </MovieDetailContainer>
        </LinearGradientContainer>
      </ImageBackground>
    </ShowCaseContainer>
  );
};
