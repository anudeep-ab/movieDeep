import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {useFocusable} from '@noriginmedia/norigin-spatial-navigation';
import {Colors} from '../config/colors';

interface CardProps {
  title: string;
  image?: string;
  width?: number;
  height?: number;
  onPress: () => void;
}

const Card = (props: CardProps): JSX.Element => {
  const {image, title, onPress, width = 150, height = 220} = props;
  const {ref, focused, focusSelf} = useFocusable();

  const cardStyles = [{width: width, height: height}];
  const imageStyles = [{width: width - 5, height: height - 5}];

  return (
    <TouchableHighlight
      ref={ref}
      activeOpacity={0.6}
      onFocus={focusSelf}
      onPress={onPress}
      style={[
        cardStyles,
        styles.cardView,
        focused ? styles.wrapperFocused : null,
      ]}>
      <>
        <Image style={[imageStyles]} source={{uri: image}} />
        <Text style={styles.title}>{title}</Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardView: {
    margin: 10,
  },
  title: {
    color: 'black',
    position: 'absolute',
  },
  wrapperFocused: {
    borderWidth: 2,
    borderColor: Colors.white,
  },
});

export default Card;
