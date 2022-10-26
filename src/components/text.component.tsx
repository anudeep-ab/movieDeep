import React, { FunctionComponent, ReactNode } from 'react';
import { StyleProp, TextStyle, TextProps } from 'react-native';
import styled from 'styled-components/native';

interface ITextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

const StyledText = styled.Text<ITextProps>`
  fontsize: ${({ theme }) => theme.Sizes._16PX};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const Text: FunctionComponent<ITextProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};
