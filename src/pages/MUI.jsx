import Info from './Info'

import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import ThreeDRotation from '@mui/icons-material/ThreeDRotation'

const MUI = () => {
  return (
    <>
      <Info
        name='Material UI'
        npm='https://www.npmjs.com/package/@mui/material'
        doce='https://mui.com'
      />

      <Alert severity='success' style={{ width: 400 }}>
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>

      <Stack spacing={2} direction='row'>
        <Button variant='contained'>Contained</Button>
        <Button variant='text'>Text</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <h4>Icons:</h4>
      <AccessAlarmIcon />
      <ThreeDRotation />
    </>
  )
}

export default MUI
