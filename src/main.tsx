import * as React from 'react'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { createRoot } from 'react-dom/client'
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register'

import { App } from '@/App'
import { theme } from '@/theme'

if ('serviceWorker' in navigator) {
  registerSW()
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>,
)
