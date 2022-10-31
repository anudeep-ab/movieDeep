import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { SmallText } from '../texts';
import { ButtonProps } from './types';

const StyledButton = styled.TouchableOpacity`
  width: 100px;
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  margin-vertical: 5px;
  border-radius: ${({ theme }) => theme.Sizes._4PX};
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
