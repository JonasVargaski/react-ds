import { Typography } from './packages/components/Typography'
import { Button } from './packages/components/Button'
import { OutlinedCheckButton } from './packages'

export function App() {
  return (
    <div>
      <Button variant="secondary">AHUHAUHU</Button>
      <Typography color="blue.200">ajashuas</Typography>]
      <OutlinedCheckButton checked={false} onClick={() => null}>
        ds
      </OutlinedCheckButton>
    </div>
  )
}
