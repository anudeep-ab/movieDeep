import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { SmallText } from '../texts';
import { ButtonProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';

const StyledButton = styled.TouchableOpacity`
  width: ${({ theme }) => scalableSize(theme.Sizes._100)};
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => scalableSize(theme.Sizes._4)};
`;

export const SmallButton: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  ...otherProps
}) => {
  return (
    <StyledButton style={style} {...otherProps}>
      <SmallText style={textStyle}>{children}</SmallText>
    </StyledButton>
  );
};
