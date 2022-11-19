import React, { FunctionComponent, useCallback, useState } from 'react';
import { ButtonProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/theme/colors';
import { Sizes } from '../../config/theme/sizes';
import { Text } from '../texts';

const dynamicButtonStyles = (
  mediumbtn: boolean | undefined,
  largebtn: boolean | undefined,
): { width: number; borderRadius: number } => {
  let width = scalableSize(Sizes._100, true);
  let borderRadius = scalableSize(Sizes._4, true);
  if (mediumbtn) {
    width = scalableSize(Sizes._200, true);
  } else if (largebtn) {
    width = scalableSize(Sizes._300, true);
  }
  return { width, borderRadius };
};

export const Button: FunctionComponent<ButtonProps> = ({
  children,
  style,
  textStyle,
  hasTVPreferredFocus,
  medium,
  large,
  ...otherProps
}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  return (
    <TouchableOpacity
      onFocus={onFocus}
      onBlur={onBlur}
      {...otherProps}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={[
        style,
        styles.button,
        dynamicButtonStyles(medium, large),
        focus ? styles.buttonFocused : null,
      ]}>
      {medium && (
        <Text medium style={textStyle}>
          {children}
        </Text>
      )}
      {large && (
        <Text large style={textStyle}>
          {children}
        </Text>
      )}
      {!medium && !large && <Text style={textStyle}>{children}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.ui.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'transparent',
    borderWidth: 2,
  },
  buttonFocused: {
    borderColor: colors.bg.secondary,
  },
});
