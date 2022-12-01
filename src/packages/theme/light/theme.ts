import { ThemeOptions } from '@mui/material/styles'
import { createBreakpoints } from '@mui/system'

import { palette } from './colorPalette'

const theme: ThemeOptions = {
  palette: {
    ...palette,
    primary: { main: palette.blue[400] },
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    allVariants: { fontStyle: 'normal', flexGrow: '0', letterSpacing: '0' },
    displayLarge: { fontWeight: '600', fontSize: '6rem', lineHeight: '7rem' },
    displayMedium: { fontWeight: '600', fontSize: '3.25rem', lineHeight: '4rem' },
    displaySmall: { fontWeight: '600', fontSize: '2.75rem', lineHeight: '3.25rem' },
    displayXSmall: { fontWeight: '600', fontSize: '2.25rem', lineHeight: '2.75rem' },
    headingXXLarge: { fontWeight: '600', fontSize: '2.5rem', lineHeight: '3.25rem' },
    headingXLarge: { fontWeight: '600', fontSize: '2.25rem', lineHeight: '2.75rem' },
    headingLarge: { fontWeight: '600', fontSize: '2rem', lineHeight: '2.5rem' },
    headingMedium: { fontWeight: '600', fontSize: '1.75rem', lineHeight: '2.25rem' },
    headingSmall: { fontWeight: '600', fontSize: '1.5rem', lineHeight: '2rem' },
    headingXSmall: { fontWeight: '600', fontSize: '1.25rem', lineHeight: '1.75rem' },
    labelLarge: { fontWeight: '500', fontSize: '1.125rem', lineHeight: '1.75rem' },
    labelMedium: { fontWeight: '500', fontSize: '1rem', lineHeight: '1.5rem' },
    labelSmall: { fontWeight: '500', fontSize: '0.875rem', lineHeight: '1.25rem' },
    labelXSmall: { fontWeight: '500', fontSize: '0.75rem', lineHeight: '1rem' },
    paragraphLarge: { fontWeight: '400', fontSize: '1.125rem', lineHeight: '1.75rem' },
    paragraphMedium: { fontWeight: '400', fontSize: '1rem', lineHeight: '1.5rem' },
    paragraphSmall: { fontWeight: '400', fontSize: '0.875rem', lineHeight: '1.25rem' },
    paragraphXSmall: { fontWeight: '400', fontSize: '0.75rem', lineHeight: '1rem' },
  },
  spacing: (factor = 0) => `${4 * factor}px`,
  breakpoints: createBreakpoints({
    values: { mobile: 0, tablet: 640, laptop: 1024, desktop: 1200 },
  }),
  components: {
    MuiButton: {
      defaultProps: { variant: 'primary', color: undefined },
      styleOverrides: {
        root: { borderRadius: '4px', textTransform: 'unset', fontWeight: 500 },
        startIcon: { marginRight: '12px' },
        endIcon: { marginLeft: '12px' },
        sizeLarge: { padding: '14px 32px', fontSize: '1.125rem', lineHeight: '1.75rem' },
        sizeMedium: { padding: '12px 20px', fontSize: '1rem', lineHeight: '1.5rem' },
        sizeSmall: { padding: '8px 16px', fontSize: '.875rem', lineHeight: '1.25rem' },
      },
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            color: palette.white,
            backgroundColor: palette.blue[400],
            '&:hover': { backgroundColor: palette.blue[500] },
            '&:active': { backgroundColor: palette.blue[600] },
            '&:focus-visible': { boxShadow: `0 0 0 3px ${palette.blue[300]}` },
            '&:disabled': { backgroundColor: palette.gray[100], color: palette.gray[400] },
          },
        },
        {
          props: { variant: 'secondary' },
          style: {
            color: palette.black,
            backgroundColor: palette.white,
            border: `1px solid ${palette.gray[200]}`,
            '&:hover': { backgroundColor: palette.gray[50] },
            '&:active': { backgroundColor: palette.gray[200] },
            '&:focus-visible': {
              borderColor: palette.blue[300],
              boxShadow: `0 0 0 2px ${palette.blue[300]}`,
            },
            '&:disabled': { backgroundColor: palette.gray[100], color: palette.gray[400] },
          },
        },
        {
          props: { variant: 'tertiary' },
          style: {
            color: palette.black,
            backgroundColor: palette.white,
            '&:hover': { backgroundColor: palette.gray[50] },
            '&:active': { backgroundColor: palette.gray[100] },
            '&:focus-visible': { boxShadow: `0 0 0 3px ${palette.blue[300]}` },
            '&:disabled': { color: palette.gray[400] },
          },
        },
      ],
    },
  },
}

export default theme
