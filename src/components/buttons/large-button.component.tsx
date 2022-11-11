import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { LargeText } from '../texts';
import { ButtonProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';

const StyledButton = styled.TouchableOpacity`
  width: ${({ theme }) => scalableSize(theme.Sizes._300)};
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => scalableSize(theme.Sizes._4)};
`;

export const LargeButton: FunctionComponent<ButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (
    <StyledButton {...otherProps}>
      <LargeText>{children}</LargeText>
    </StyledButton>
  );
};
