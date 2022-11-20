import { Platform } from 'react-native';
import { HomeScreenWeb } from './home-screen.web';
import { HomeScreenTV } from './home-screen.tv';
import { HomeScreenMobile } from './home-screen.native';

export const HomeScreen = Platform.select({
  native: () => (Platform.isTV ? HomeScreenTV : HomeScreenMobile),
  web: () => HomeScreenWeb,
  default: () => HomeScreenMobile,
})();
