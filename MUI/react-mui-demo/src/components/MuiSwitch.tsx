import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState, useEffect } from 'react'

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log({checked})
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    if (checked) {
      document.documentElement.setAttribute("style", "background-color: white;");
      document.getElementsByTagName("body")[0].setAttribute("style", "color: black;");
    } else {
      document.documentElement.setAttribute("style", "background-color: black;");
      document.getElementsByTagName("body")[0].setAttribute("style", "color: white;");
    }
  }
  return (
    <Box>
      <FormControlLabel 
        label='Dark mode' 
        control={
          <Switch 
            checked={checked} 
            onChange={handleChange}
            size="small" 
            color='success'
          />
        }
      />
    </Box>
  )
}
