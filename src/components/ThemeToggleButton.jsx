// src/components/ThemeToggleButton.jsx
import styled from 'styled-components'
import { useTheme } from '../context/ThemeContext'

const Button = styled.button`
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.background};
  padding: 0.6rem 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: ${(p) => p.theme.radius.button || '0.5rem'};
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accentHover || '#e13b48'};
    transform: scale(1.05);
  }
`

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme}>
      Tema: {theme.name === 'light' ? '🌞 Claro' : '🌚 Escuro'}
    </Button>
  )
}
