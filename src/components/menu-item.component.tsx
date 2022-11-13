import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableHighlight, View } from 'react-native';

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
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      style={[styles.item, focus ? styles.itemFocused : null]}>
      <View />
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#808080',
    alignSelf: 'stretch',
    height: 30,
    left: 0,
    marginBottom: 25,
    marginHorizontal: 25,
    borderRadius: 5,
  },
  itemFocused: {
    backgroundColor: '#714add',
  },
});
