import 'styled-components';
import { Colors, colors } from './src/config/theme/colors';
import {
  space,
  lineHeights,
  Space,
  LineHeight,
} from './src/config/theme/spacing';
import { sizes, Sizes } from './src/config/theme/sizes';
import { Font, FontSize, FontWeight } from './src/config/theme/fonts';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
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
}
