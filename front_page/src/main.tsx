import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/LangSwitcher/i18n';
import AppThemeProvider from './providers/AppThemeProvider';
import './index.css'
import App from './App.tsx'
// import CssBaseline from '@mui/material/CssBaseline'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <CssBaseline /> */}
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </StrictMode>,
)
