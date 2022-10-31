import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { LargeText } from '../texts';
import { ButtonProps } from './types';

const StyledButton = styled.TouchableOpacity`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  margin-vertical: 5px;
  border-radius: ${({ theme }) => theme.Sizes._4PX};
`;

export const LargeButton: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  ...otherProps
}) => {
  return (
    <StyledButton style={style} {...otherProps}>
      <LargeText style={textStyle}>{children}</LargeText>
    </StyledButton>
  );
};
