import React, { FunctionComponent } from 'react';

import styled from 'styled-components/native';
import { MediumText } from '../texts';
import { ButtonProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const StyledButton = styled.TouchableOpacity`
  width: ${({ theme }) => scalableSize(theme.Sizes._200)};
  background-color: ${({ theme }) => theme.colors.ui.primary};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => scalableSize(theme.Sizes._4)};
`;

export const MediumButton: FunctionComponent<ButtonProps> = ({
  children,
  ...otherProps
}) => {
  const { ref, focused, focusSelf } = useFocusable();

  return (
    <StyledButton
      ref={ref}
      onFocus={focusSelf}
      style={focused ? { backgroundColor: 'orange' } : null}
      {...otherProps}>
      <MediumText>{children}</MediumText>
    </StyledButton>
  );
};
