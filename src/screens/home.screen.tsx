import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { CardList } from '../components/card-list.component';
import { Menu } from './menu.screen';
import { ShowCaseScreen } from './show-case.platform';
import { scalableSize } from '../utils/scalable-size.util';

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

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Menu />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <ShowCaseScreen />
          <View style={styles.sectionContainer}>
            <CardList title="Recently Added" data={data} rowNumber={0} />
            <CardList title="Recently Added2" data={data} />
            <CardList title="Recently Added3" data={data} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  body: {
    backgroundColor: 'black',
    paddingLeft: scalableSize(100),
  },
  sectionContainer: {
    marginTop: 32,
    marginLeft: 10,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});
