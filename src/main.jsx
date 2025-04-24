// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { ThemeProvider, useTheme } from './context/ThemeContext'

const ThemeWrapper = () => {
  const { theme } = useTheme()
  return (
    <StyledThemeProvider theme={theme}>
      <App />
    </StyledThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeWrapper />
    </ThemeProvider>
  </React.StrictMode>
)
