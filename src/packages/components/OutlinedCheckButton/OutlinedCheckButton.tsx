import { Stack, Typography, BoxProps } from '@mui/material'
import { Container } from './styles'

interface OutlinedCheckButtonProps extends Omit<BoxProps, 'onClick'> {
  fullWidth?: boolean
  title?: string
  description?: string
  onClick?: (checked: boolean, reason: 'container' | 'actionButton') => void
  checked?: boolean
  children?: React.ReactNode
  className?: string
}

const OutlinedCheckButton = ({
  checked,
  onClick,
  title,
  description,
  children,
  ...props
}: OutlinedCheckButtonProps) => {
  return (
    <Container
      {...props}
      checked={checked}
      onClick={(e) => {
        e.stopPropagation()
        onClick?.(!checked, 'container')
      }}
    >
      {children ?? (
        <>
          <Stack gap="4px">
            {title && <Typography variant="labelMedium">{title}</Typography>}
            {description && (
              <Typography color="gray.600" variant="paragraphSmall">
                {description}
              </Typography>
            )}
          </Stack>
        </>
      )}
    </Container>
  )
}

export { OutlinedCheckButton, type OutlinedCheckButtonProps }
