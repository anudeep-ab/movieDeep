import { Platform } from 'react-native';

const BASE_SIZE = 18;
const BASE_SIZE_TV = 12;
const RATIO = BASE_SIZE / BASE_SIZE_TV;

export const scalableSize = (
  size: number,
  doReturnNumber: boolean = false,
): string | number => {
  let calculatedSize = size;

  if (Platform.isTV && Platform.OS === 'android') {
    calculatedSize = size / RATIO;
  }

  return doReturnNumber ? calculatedSize : `${calculatedSize}px`;
};
