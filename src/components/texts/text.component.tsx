import React, { FunctionComponent } from 'react';
import styled from 'styled-components/native';
import { ITextProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';

const StyledText = styled.Text<ITextProps>`
  font-size: ${({ theme, medium, large }) => {
    let size: number = theme.Sizes._18;
    if (medium) {
      size = theme.Sizes._22;
    } else if (large) {
      size = theme.Sizes._32;
    }
    return scalableSize(size, false);
  }};
  font-family: ${({ theme }) => theme.font.appFontFamily};
  line-height: ${({ theme, large }) => {
    let size = theme.Sizes._25;
    if (large) {
      size = theme.Sizes._32;
    }
    return scalableSize(size, false);
  }};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-vertical: ${({ theme }) => scalableSize(theme.Sizes._8, false)};
`;

export const Text: FunctionComponent<ITextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <StyledText style={style} {...otherProps}>
      {children}
    </StyledText>
  );
};
