import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

import theme from './light/theme'

type ThemeProviderProps = {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps): React.ReactElement => (
  <MuiThemeProvider theme={createTheme(theme)}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export { ThemeProvider, type ThemeProviderProps }
