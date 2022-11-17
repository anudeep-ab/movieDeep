import { ReactNode } from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  hasTVPreferredFocus?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}
