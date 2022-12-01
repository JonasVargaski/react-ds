import MuiTypography, { TypographyProps as MuiTypographyProps } from '@mui/material/Typography'
import { PaletteOptions } from '../../theme/light/colorPalette'

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
}[keyof ObjectType & (string | number)]

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
  color?: NestedKeyOf<PaletteOptions>
}

const Typography: React.FC<TypographyProps> = MuiTypography

export { type TypographyProps, Typography }
