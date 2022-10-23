export interface LineHeight {
  title: string;
  copy: string;
}

export const lineHeights: LineHeight = {
  title: '28px',
  copy: '20px',
};

export enum Space {
  '0PX' = '0px',
  '4PX' = '4px',
  '8PX' = '8px',
  '16PX' = '16px',
  '32PX' = '32px',
  '64PX' = '64px',
}

export const space = ['0px', '4px', '8px', '16px', '32px', '64px'];
