import React, { FunctionComponent, useCallback, useRef } from 'react';
import {
  findNodeHandle,
  TouchableOpacityProps,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import { SmallText } from './texts';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

interface CardProps extends TouchableOpacityProps {
  image: string;
  title: string;
  hasTVPreferredFocus?: boolean;
  blockFocusRight?: boolean;
}

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

export const Card: FunctionComponent<CardProps> = ({
  style,
  image,
  title,
  hasTVPreferredFocus,
  blockFocusRight,
}) => {
  const touchableOpacityRef = useRef(null);
  const onRef = useCallback((ref: any) => {
    if (ref) {
      touchableOpacityRef.current = ref;
    }
  }, []);
  const { focused, focusSelf } = useFocusable();

  return (
    <TouchableHighlight
      onFocus={focusSelf}
      ref={onRef}
      hasTVPreferredFocus={hasTVPreferredFocus}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableOpacityRef.current) : null
      }
      style={[styles.cardContainer, focused ? styles.cardFocused : null]}>
      <StyledCard style={style}>
        <StyledImage source={{ uri: image }} />
        <SmallText>{title}</SmallText>
      </StyledCard>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderColor: 'transparent',
    borderWidth: 4,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  cardFocused: {
    borderColor: '#714add',
  },
});
