import 'styled-components';
import { Colors } from './src/config/theme/colors';
import { Font } from './src/config/theme/fonts';
import { Sizes } from './src/config/theme/sizes';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    Sizes: typeof Sizes;
    font: Font;
  }
}
