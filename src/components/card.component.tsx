import React, { FunctionComponent, useCallback, useRef, useState } from 'react';
import {
  findNodeHandle,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../config/theme/colors';
import { scalableSize } from '../utils/scalable-size.util';
import { Text } from './texts';

interface CardProps extends TouchableOpacityProps {
  image: string;
  title: string;
  hasTVPreferredFocus?: boolean;
  blockFocusRight?: boolean;
}

const StyledCard = styled.View`
  flex: 1;
  margin: 5px;
`;
const StyledImage = styled.Image`
  width: ${scalableSize(150, false)};
  height: ${scalableSize(185, false)};
`;

const findCardNodeHandle = (ref: any): number | undefined => {
  const handleNumber = findNodeHandle(ref);

  if (!handleNumber) {
    return undefined;
  }

  return handleNumber;
};

export const Card: FunctionComponent<CardProps> = ({
  style,
  image,
  title,
  hasTVPreferredFocus,
  blockFocusRight,
}) => {
  const [focus, setFocus] = useState(false);
  const touchableRef = useRef(null);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const onRef = useCallback((ref: any) => {
    if (ref) {
      touchableRef.current = ref;
    }
  }, []);

  return (
    <TouchableOpacity
      onFocus={onFocus}
      onBlur={onBlur}
      ref={onRef}
      hasTVPreferredFocus={hasTVPreferredFocus}
      nextFocusRight={
        blockFocusRight ? findCardNodeHandle(touchableRef.current) : undefined
      }
      style={[styles.cardWrapper, focus ? styles.cardFocused : null]}>
      <StyledCard style={style}>
        <StyledImage source={{ uri: image }} />
        <Text>{title}</Text>
      </StyledCard>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    borderColor: 'transparent',
    borderWidth: 2,
    minWidth: scalableSize(150, true),
    minHeight: scalableSize(235, true),
  },
  cardFocused: {
    borderColor: colors.bg.secondary,
  },
});
