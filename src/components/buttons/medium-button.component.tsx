import React, { FunctionComponent } from 'react';

import styled from 'styled-components/native';
import { MediumText } from '../texts';
import { ButtonProps } from './types';

const StyledButton = styled.TouchableOpacity`
  width: 200px;
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  margin-vertical: 5px;
  border-radius: ${({ theme }) => theme.Sizes._4PX};
`;

export const MediumButton: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  ...otherProps
}) => {
  return (
    <StyledButton style={style} {...otherProps}>
      <MediumText style={textStyle}>{children}</MediumText>
    </StyledButton>
  );
};
