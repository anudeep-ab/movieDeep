import { Platform } from 'react-native';
import { MovieDetailScreenLarge } from './movie-detail.large';
import { MovieDetailScreenSmall } from './movie-detail.small';

export const MovieDetailScreen = Platform.select({
  native: () =>
    Platform.isTV ? MovieDetailScreenLarge : MovieDetailScreenSmall,
  web: () => MovieDetailScreenLarge,
  default: () => MovieDetailScreenSmall,
})();
