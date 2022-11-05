import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ITextProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';

const StyledText = styled.Text`
  font-size: ${({ theme }) => scalableSize(theme.Sizes._24)};
  font-family: ${({ theme }) => theme.font.appFontFamily};
  line-height: ${({ theme }) => scalableSize(theme.Sizes._25)};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-vertical: ${({ theme }) => scalableSize(theme.Sizes._8)};
`;

export const MediumText: FunctionComponent<ITextProps> = ({
  children,
  style,
}) => {
  return <StyledText style={style}>{children}</StyledText>;
};
