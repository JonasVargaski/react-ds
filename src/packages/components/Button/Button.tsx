import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button'

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = MuiButton

export { type ButtonProps, Button }
