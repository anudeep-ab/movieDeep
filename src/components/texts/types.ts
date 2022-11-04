import { ReactNode } from 'react';
import { StyleProp, TextStyle, TextProps } from 'react-native';

export interface ITextProps extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
