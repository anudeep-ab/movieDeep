import { Platform } from 'react-native';
import { ShowCaseScreenLarge } from './show-case.screen.large';
import { ShowCaseScreenSmall } from './show-case.screen.small';

export const ShowCaseScreen = Platform.select({
  native: () => (Platform.isTV ? ShowCaseScreenLarge : ShowCaseScreenSmall),
  web: () => ShowCaseScreenLarge,
  default: () => ShowCaseScreenSmall,
})();
