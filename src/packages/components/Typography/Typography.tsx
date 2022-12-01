import Typography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import { PaletteOptions } from '../../theme/light/colorPalette'

interface TypographyProps extends Omit<MuiTypographyProps, 'variant' | 'color'> {
  variant?:
    | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'displayXSmall'
    | 'headingXXLarge'
    | 'headingXLarge'
    | 'headingLarge'
    | 'headingMedium'
    | 'headingSmall'
    | 'headingXSmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    | 'labelXSmall'
    | 'paragraphLarge'
    | 'paragraphMedium'
    | 'paragraphSmall'
    | 'paragraphXSmall'
  color?: keyof PaletteOptions
}

export { type TypographyProps, Typography }
