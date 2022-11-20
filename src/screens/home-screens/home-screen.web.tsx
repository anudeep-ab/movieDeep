import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { CardList } from '../../components/card-list.component';
import { MenuScreen } from '../menu.screen';
import { ShowCaseScreen } from '../show-case.platform';
import { scalableSize } from '../../utils/scalable-size.util';

const data = [
  {
    title: 'Khaidi',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975678/khaidi_poster.jpg',
  },
  {
    title: 'Khaidi 2',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665974036/senapathi_poster.jpg',
  },
  {
    title: 'Khaidi 3',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1667097769/canva-simple-photocentric-romance-of-love-movie-poster-De4Pnype7jE_vzihdd.jpg',
  },
  {
    title: 'Khaidi 4',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975678/khaidi_poster.jpg',
  },
  {
    title: 'Khaidi 5',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975678/khaidi_poster.jpg',
  },
  {
    title: 'Khaidi 6',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975678/khaidi_poster.jpg',
  },
  {
    title: 'Khaidi 7',
    poster:
      'https://res.cloudinary.com/moviedeeptest/image/upload/v1665975678/khaidi_poster.jpg',
  },
];

const HomeContainer = styled.View`
  padding-left: ${scalableSize(100, false)}
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const HomeScreenWeb = () => {
  return (
    <SafeAreaView>
      <MenuScreen />
      <HomeContainer>
        <ShowCaseScreen />
        <CardList
          data={data}
          title="Recently Added"
          onPress={(item) => {
            console.log(item);
          }}
        />
        <CardList
          data={data}
          title="Recently Added 2"
          onPress={(item) => {
            console.log(item);
          }}
        />
      </HomeContainer>
    </SafeAreaView>
  );
};
