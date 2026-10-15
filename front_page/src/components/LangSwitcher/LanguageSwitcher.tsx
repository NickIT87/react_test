import {
  FormControl,
  Select,
  MenuItem,
  type SelectChangeEvent,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <FormControl size="small" sx={{ minWidth: 120 }}>
      <Select
        value={i18n.resolvedLanguage ?? i18n.language}
        onChange={handleChange}
        sx={{
          color: '#fff',
          '.MuiSvgIcon-root': {
            color: '#fff',
          },
        }}
        MenuProps={{
          slotProps: {
            paper: {
              sx: {
                bgcolor: '#333',
                color: '#fff',
                '& .MuiMenuItem-root': {
                  color: '#fff',
                },
              },
            },
          },
        }}
      >
        <MenuItem value="ru">🇷🇺 Русский</MenuItem>
        <MenuItem value="en">🇬🇧 English</MenuItem>
      </Select>
    </FormControl>
  );
}