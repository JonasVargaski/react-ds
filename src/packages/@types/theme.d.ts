/* eslint-disable @typescript-eslint/no-empty-interface */
import '@mui/material/styles'
import '@material-ui/core/styles/createPalette'

declare module '@mui/material/styles/createTypography' {
  interface TypographyVariants {
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties
    displayXSmall?: React.CSSProperties
    headingXXLarge?: React.CSSProperties
    headingXLarge?: React.CSSProperties
    headingLarge?: React.CSSProperties
    headingMedium?: React.CSSProperties
    headingSmall?: React.CSSProperties
    headingXSmall?: React.CSSProperties
    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties
    labelXSmall?: React.CSSProperties
    paragraphLarge?: React.CSSProperties
    paragraphMedium?: React.CSSProperties
    paragraphSmall?: React.CSSProperties
    paragraphXSmall?: React.CSSProperties
  }
  interface TypographyOptions {
    displayLarge?: React.CSSProperties
    displayMedium?: React.CSSProperties
    displaySmall?: React.CSSProperties
    displayXSmall?: React.CSSProperties
    headingXXLarge?: React.CSSProperties
    headingXLarge?: React.CSSProperties
    headingLarge?: React.CSSProperties
    headingMedium?: React.CSSProperties
    headingSmall?: React.CSSProperties
    headingXSmall?: React.CSSProperties
    labelLarge?: React.CSSProperties
    labelMedium?: React.CSSProperties
    labelSmall?: React.CSSProperties
    labelXSmall?: React.CSSProperties
    paragraphLarge?: React.CSSProperties
    paragraphMedium?: React.CSSProperties
    paragraphSmall?: React.CSSProperties
    paragraphXSmall?: React.CSSProperties
  }
}
declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    borderRadius: string
  }

  interface Theme {
    borderRadius: string
  }
}

declare module '@mui/material/styles/createPalette' {
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

  interface PaletteOptions {
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

  interface Palette {
    gray: ColorOptions
    blue: ColorOptions
    green: ColorOptions
    yellow: ColorOptions
    red: ColorOptions
    orange: ColorOptions
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    displayLarge: true
    displayMedium: true
    displaySmall: true
    displayXSmall: true
    headingXXLarge: true
    headingXLarge: true
    headingLarge: true
    headingMedium: true
    headingSmall: true
    headingXSmall: true
    labelLarge: true
    labelMedium: true
    labelSmall: true
    labelXSmall: true
    paragraphLarge: true
    paragraphMedium: true
    paragraphSmall: true
    paragraphXSmall: true

    h1: false
    h2: false
    h3: false
    h4: false
    h5: false
    h6: false
    body1: false
    body2: false
    subtitle1: false
    subtitle2: false
    button: false
    caption: false
    overline: false
    inherit: false
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true
    secondary: true
    tertiary: true

    contained: false
    text: false
    outlined: false
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true
    tablet: true
    laptop: true
    desktop: true
  }
}
