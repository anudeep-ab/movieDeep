import { DefaultTheme } from '@react-navigation/native';
import { colors } from '../config/theme/colors';

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.ui.primary,
    background: colors.bg.primary,
  },
};
