import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { CardList } from '../../components/card-list.component';
import { ShowCaseScreen } from '../show-case.platform';

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
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const HomeScreenMobile = ({ navigation }: any) => {
  return (
    <SafeAreaView>
      <ScrollView
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <HomeContainer>
          <ShowCaseScreen />
          <CardList
            data={data}
            title="Recently Added"
            onPress={(item) => {
              console.log(item);
              navigation.navigate('detail');
            }}
          />
          <CardList
            data={data}
            title="Recently Added 2"
            onPress={(item) => {
              console.log(item);
              navigation.navigate('detail');
            }}
          />
        </HomeContainer>
      </ScrollView>
    </SafeAreaView>
  );
};
