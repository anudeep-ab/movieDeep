import React, { FunctionComponent, useCallback, useState } from 'react';
import { LargeText, MediumText, SmallText } from '../texts';
import { ButtonProps } from './types';
import { scalableSize } from '../../utils/scalable-size.util';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../config/theme/colors';
import { Sizes } from '../../config/theme/sizes';

const dynamicButtonStyles = (
  smallbtn: boolean | undefined,
  mediumbtn: boolean | undefined,
  largebtn: boolean | undefined,
): { width: number; borderRadius: number } => {
  let width = scalableSize(Sizes._100, true);
  let borderRadius = scalableSize(Sizes._4, true);
  if (smallbtn) {
    return { width, borderRadius };
  } else if (mediumbtn) {
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
  small,
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
        dynamicButtonStyles(small, medium, large),
        focus ? styles.buttonFocused : null,
      ]}>
      {small && <SmallText style={textStyle}>{children}</SmallText>}
      {medium && <MediumText style={textStyle}>{children}</MediumText>}
      {large && <LargeText style={textStyle}>{children}</LargeText>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    backgroundColor: colors.ui.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'transparent',
  },
  buttonFocused: {
    borderColor: colors.bg.secondary,
  },
});
