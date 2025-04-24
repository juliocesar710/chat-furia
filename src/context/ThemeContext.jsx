// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from 'react'
import { lightTheme, darkTheme } from '../themes'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === 'light' ? darkTheme : lightTheme))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
