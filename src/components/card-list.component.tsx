import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card } from './card.component';
import { MediumText } from './texts';
// import styled from 'styled-components/native';
// import { screenSizeDetector } from '../utils/screen-size.util';

export interface CardListProps {
  title: string;
  // onPress: (item: any) => void;
  data: any[];
  rowNumber?: number;
}

export const CardList: FunctionComponent<CardListProps> = ({
  title,
  data,
  // onPress,
  rowNumber,
}) => {
  return (
    <>
      <MediumText>{title}</MediumText>
      <ScrollView horizontal style={styles.row}>
        {data.map((item: { name: string; poster: string }, i: number) => (
          <Card
            key={i}
            title={item.name}
            image={item.poster}
            hasTVPreferredFocus={rowNumber === 0 && i === 0}
            blockFocusRight={i === data.length - 1}
          />
        ))}
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  row: {
    marginBottom: 50,
  },
});
