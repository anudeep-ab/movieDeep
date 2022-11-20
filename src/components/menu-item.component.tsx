import React, { useCallback, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../config/theme/colors';

export const MenuItem = ({ setMenuFocus }: any) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
    setMenuFocus(true);
  }, [setMenuFocus]);

  const onBlur = useCallback(() => {
    setFocus(false);
    setMenuFocus(false);
  }, [setMenuFocus]);

  return (
    <TouchableOpacity
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.menuItem, focus ? styles.menuItemFocused : null]}>
      <View />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#808080',
    alignSelf: 'stretch',
    height: 30,
    left: 0,
    marginBottom: 25,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  menuItemFocused: {
    borderColor: colors.bg.secondary,
  },
});
