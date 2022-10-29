import { Box } from '@mui/material'

export const MuiLayout = () => {
  return <Box component='span' sx={{
    backgroundColor: 'primary.main',
    color: 'white',
    height: '100px',
    padding: '16px',
    '&:hover': {
      backgroundColor: 'primary.light',
    },
  }} height='100px'>Codevolution</Box>
}
