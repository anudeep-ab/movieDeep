import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ITextProps } from './types';

const StyledText = styled.Text`
  font-size: ${({ theme }) => theme.Sizes._24PX};
  line-height: 25px;
  font-family: ${({ theme }) => theme.font.appFontFamily};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-vertical: 8px;
`;

export const MediumText: FunctionComponent<ITextProps> = ({
  children,
  style,
}) => {
  return <StyledText style={style}>{children}</StyledText>;
};
