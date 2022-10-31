import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ITextProps } from './types';

const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.Sizes._18PX};
  font-family: ${({ theme }) => theme.font.appFontFamily};
  line-height: 25px;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-vertical: 8px;
`;

export const SmallText: FunctionComponent<ITextProps> = ({
  children,
  style,
}) => {
  return <StyledText style={style}>{children}</StyledText>;
};
