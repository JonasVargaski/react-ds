import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

import { themeOptions } from './light/theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

const theme = createTheme(themeOptions)

const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export { ThemeProvider, type ThemeProviderProps }
