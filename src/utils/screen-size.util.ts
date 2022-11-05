import { Platform } from 'react-native';

type size = 'large' | 'small';

export const screenSizeDetector = (): size => {
  if (Platform.isTV || Platform.OS === 'web') {
    return 'large';
  }
  return 'small';
};
