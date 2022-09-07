import { Stack, TextField } from "@mui/material"

export const MuiTextField = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label="Name" variant="outlined"/>
            <TextField label="Name" variant="filled"/>
            <TextField label="Name" variant="standard"/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Small secondary" size="small" color="secondary" />
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label="Form Input" required/>
            <TextField label="Form Input" helperText="Do not share your password" />
        </Stack>
    </Stack>
  )
}