interface ColorOptions {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
}

export interface PaletteOptions {
  white: string
  black: string
  boxShadow: string
  gray: ColorOptions
  blue: ColorOptions
  green: ColorOptions
  yellow: ColorOptions
  red: ColorOptions
  orange: ColorOptions
}

export const palette: PaletteOptions = {
  white: '#FFFFFF',
  black: '#141414',
  boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)',
  gray: {
    50: '#F6F6F6',
    100: '#EEEEEE',
    200: '#E2E2E2',
    300: '#CBCBCB',
    400: '#AFAFAF',
    500: '#757575',
    600: '#545454',
    700: '#545454',
  },
  blue: {
    50: '#EEF3FE',
    100: '#D4E2FC',
    200: '#A0BFF9',
    300: '#5B91F4',
    400: '#276EF1',
    500: '#1E54B7',
    600: '#174291',
    700: '#102C60',
  },
  green: {
    50: '#F2F9F6',
    100: '#DCEEE5',
    200: '#B1DAC6',
    300: '#4FAC7F',
    400: '#048848',
    500: '#036636',
    600: '#024B28',
    700: '#013019',
  },
  yellow: {
    50: '#FFFAF0',
    100: '#FFF2D9',
    200: '#FFE3AC',
    300: '#FFCF70',
    400: '#FFC043',
    500: '#BC8B2C',
    600: '#997328',
    700: '#664D1B',
  },
  red: {
    50: '#FDF0EF',
    100: '#FADBD7',
    200: '#F4AFA7',
    300: '#EB7567',
    400: '#D44333',
    500: '#AE372A',
    600: '#892C21',
    700: '#5C1D16',
  },
  orange: {
    50: '#FEF3EF',
    100: '#FBE2D6',
    200: '#F7BFA5',
    300: '#F19164',
    400: '#ED6E33',
    500: '#B45427',
    600: '#8E421F',
    700: '#5F2C14',
  },
}
