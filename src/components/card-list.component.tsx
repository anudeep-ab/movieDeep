import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { screenSizeDetector } from '../utils/screen-size.util';
import { Card } from './card.component';
import { MediumText } from './texts';

export interface FlatList {
  title: string;
  onPress: (item: any) => void;
  data: any[];
}

const StyledFlatList = styled.FlatList``;

const CardListContainer = styled.View`
  margin-top: 0;
  padding-left: ${screenSizeDetector() === 'large' ? '45px' : '15px'};
`;

const CardListHeader = styled.View``;

export const CardList: FunctionComponent<FlatList> = ({
  title,
  data,
  onPress,
}) => {
  return (
    <CardListContainer>
      <CardListHeader>
        <MediumText>{title}</MediumText>
      </CardListHeader>
      <StyledFlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <Card
            image={item.poster}
            title={item.title}
            onPress={() => onPress(item)}
          />
        )}
      />
    </CardListContainer>
  );
};
