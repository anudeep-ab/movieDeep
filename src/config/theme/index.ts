import { Colors, colors } from './colors';
import { space, lineHeights, Space, LineHeight } from './spacing';
import { sizes, Sizes } from './sizes';
import {
  fonts,
  fontWeights,
  fontSizes,
  Font,
  FontSize,
  FontWeight,
} from './fonts';

export interface Theme {
  colors: Colors;
  space: string[];
  lineHeights: LineHeight;
  sizes: string[];
  fonts: Font;
  fontSizes: FontSize;
  fontWeights: FontWeight;
  Sizes: typeof Sizes;
  Space: typeof Space;
}

export const theme: Theme = {
  colors,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
  Sizes,
  Space,
};
