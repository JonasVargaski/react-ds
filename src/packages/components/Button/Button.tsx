import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export { type ButtonProps, Button }
