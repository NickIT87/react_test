
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

type Props = {
  mode: 'light' | 'dark';
  onToggle: () => void;
};

export default function ThemeToggle({ mode, onToggle }: Props) {
  return (
    <Tooltip title="Переключить тему">
      <IconButton
        color="inherit"
        onClick={onToggle}
        aria-label="Переключить тему"
      >
        {mode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}
