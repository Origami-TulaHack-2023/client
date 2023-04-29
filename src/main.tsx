import * as React from 'react'

import { ThemeProvider, CssBaseline } from '@mui/material'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// eslint-disable-next-line import/no-unresolved
import { registerSW } from 'virtual:pwa-register'

import { App } from '@/App'
import { theme } from '@/theme'

import '@fontsource/exo/400.css'
import '@fontsource/exo/500.css'
import '@fontsource/exo/700.css'
import '@fontsource/exo/900.css'

if ('serviceWorker' in navigator) {
  registerSW()
}

const queryClient = new QueryClient()

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
          <CssBaseline />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
