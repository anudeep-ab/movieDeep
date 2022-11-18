import React, { FunctionComponent } from 'react';
import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';
import { Text } from './texts';

interface CardProps extends TouchableOpacityProps {
  image: string;
  title: string;
}

const TouchableOpacity = styled.TouchableOpacity``;
const StyledCard = styled.View`
  flex: 1;
  margin: 5px;
  min-width: 130px;
  min-height: 175px;
`;
const StyledImage = styled.Image`
  width: 130px;
  height: 175px;
  border-radius: 10px;
`;

export const Card: FunctionComponent<CardProps> = ({ style, image, title }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} underlayColor="#fff">
      <StyledCard style={style}>
        <StyledImage source={{ uri: image }} />
        <Text>{title}</Text>
      </StyledCard>
    </TouchableOpacity>
  );
};
