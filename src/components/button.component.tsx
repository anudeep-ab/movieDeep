import React, { FunctionComponent, ReactNode } from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import styled from 'styled-components/native';
import { Text } from './text.component';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}

const StyledButton = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-vertical: 10px;
`;

const StyledButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  ...otherProps
}) => {
  return (
    <StyledButton style={style} {...otherProps}>
      <StyledButtonText style={textStyle}>{children}</StyledButtonText>
    </StyledButton>
  );
};
