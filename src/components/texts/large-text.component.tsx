import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ITextProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';

const StyledText = styled.Text`
  font-size: ${({ theme }) => scalableSize(theme.Sizes._32)};
  font-family: ${({ theme }) => theme.font.appFontFamily};
  line-height: ${({ theme }) => scalableSize(theme.Sizes._32)};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-vertical: ${({ theme }) => scalableSize(theme.Sizes._8)};
`;

export const LargeText: FunctionComponent<ITextProps> = ({
  children,
  style,
}) => {
  return <StyledText style={style}>{children}</StyledText>;
};
