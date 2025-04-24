// src/components/ThemeToggleButton.jsx
import { useTheme } from '../context/ThemeContext'

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
    >
      Tema: {theme.name === 'light' ? '🌞 Claro' : '🌚 Escuro'}
    </button>
  )
}
