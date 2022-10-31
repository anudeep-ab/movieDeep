export interface Brand {
  primary: string;
  secondary: string;
  muted: string;
}

export interface Ui {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  disabled: string;
  error: string;
  success: string;
}

export interface Bg {
  primary: string;
  secondary: string;
}

export interface Fg {
  primary: string;
  secondary: string;
}

export interface Text {
  primary: string;
  secondary: string;
  disabled: string;
  inverse: string;
  error: string;
  success: string;
}

export interface Colors {
  brand: Brand;
  ui: Ui;
  bg: Bg;
  fg: Fg;
  text: Text;
}

export const colors: Colors = {
  brand: {
    primary: '#696AC3',
    secondary: '#5D6CC6',
    muted: '#C6DAF7',
  },
  ui: {
    primary: '#db0000',
    secondary: '#F1F1F1',
    tertiary: '#F1F1F1',
    quaternary: '#FFFFFF',
    disabled: '#DEDEDE',
    error: '#D0421B',
    success: '#138000',
  },
  bg: {
    // primary: '#141414',
    primary: '#000000',
    // primary: '#F1F1F1',
    secondary: '#F1F1F1',
  },
  fg: {
    primary: '#FFFFFF',
    secondary: '#141414',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#141414',
    disabled: '#9C9C9C',
    inverse: '#FFFFFF',
    error: '#D0421B',
    success: '#138000',
  },
};
