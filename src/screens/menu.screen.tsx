import React, { FunctionComponent, ReactNode, useEffect } from 'react';
import styled from 'styled-components/native';
import { Dimensions, TouchableHighlightProps } from 'react-native';
import {
  useFocusable,
  FocusContext,
} from '@noriginmedia/norigin-spatial-navigation';
import { SmallText } from '../components/texts';

const { width, height } = Dimensions.get('window');

const MENU_ITEMS = [1, 2, 3, 4, 5];

interface MenuItemProps extends TouchableHighlightProps {
  children: ReactNode;
}

export const MenuItem: FunctionComponent<MenuItemProps> = ({ children }) => {
  const { ref, focused, focusSelf } = useFocusable();

  console.log('focused', focused);
  const StyledMenuItem = styled.TouchableHighlight`
    width: 100px;
    height: 50px;
    padding: 10px;
    border-width: ${focused && '2px'};
    border-color: ${focused && 'orange'};
  `;

  return (
    <StyledMenuItem ref={ref} onFocus={focusSelf} hasTVPreferredFocus={true}>
      <SmallText> {children}</SmallText>
    </StyledMenuItem>
  );
};

export const Menu = () => {
  const { ref, focusKey, focusSelf } = useFocusable();

  //   useEffect(() => {
  //     focusSelf();
  //   }, [focusSelf]);

  const StyledMenu = styled.View`
    width: ${width / 6};
    height: ${height};
    border-width: 1px;
    border-color: yellow;
  `;

  return (
    <FocusContext.Provider value={focusKey}>
      <StyledMenu ref={ref}>
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item}>{item}</MenuItem>
        ))}
      </StyledMenu>
    </FocusContext.Provider>
  );
};
