import { Platform } from 'react-native';

const BASE_SIZE = 18;
const BASE_SIZE_TV = 12;
const RATIO = BASE_SIZE / BASE_SIZE_TV;

export function scalableSize(size: number, doReturnNumber: false): string;
export function scalableSize(size: number, doReturnNumber: true): number;

export function scalableSize(size: number, doReturnNumber: boolean = false) {
  let calculatedSize = size;

  if (Platform.isTV && Platform.OS === 'android') {
    calculatedSize = size / RATIO;
  }

  return doReturnNumber ? calculatedSize : `${calculatedSize}px`;
}
