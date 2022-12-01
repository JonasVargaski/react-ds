import Box from '@mui/material/Box'
import { css, styled } from '@mui/material/styles'

type ContainerProps = {
  fullWidth?: boolean
  checked?: boolean
}

export const Container = styled(Box)<ContainerProps>`
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'fit-content')};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.palette.gray[200]};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  align-items: center;
  padding: 24px;
  user-select: none;
  cursor: pointer;
  transition: box-shadow, background 120ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.palette.blue[400]};
  }
  .icon-container svg {
    color: ${({ theme }) => theme.palette.gray[400]};
    margin-right: 13px;
  }
  .action-container {
    padding-left: 16px;
    margin-right: -4px;
    margin-left: auto;
  }

  ${({ checked, theme }) =>
    checked &&
    css`
      && {
        background: ${theme.palette.blue[50]};
        box-shadow: 0 0 0 2px ${theme.palette.blue[400]};
        .icon-container svg {
          color: ${theme.palette.blue[400]};
        }
      }
    `}
`
