import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { useTranslation } from 'react-i18next';

import LanguageSwitcher from '../LangSwitcher/LanguageSwitcher';
import ThemeToggle from '../ThemeToggle';

import { useAppTheme } from '../../providers/AppThemeProvider';

export default function Navbar() {
  const { t } = useTranslation();

  const { mode, toggleTheme } = useAppTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {t('app.title')}
        </Typography>

        <LanguageSwitcher />

        <ThemeToggle
          mode={mode}
          onToggle={toggleTheme}
        />
      </Toolbar>
    </AppBar>
  );
}