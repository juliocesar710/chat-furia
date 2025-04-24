import styled from 'styled-components'
import ThemeToggleButton from '../components/ThemeToggleButton'


const Caixa = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  padding: 2rem;
  border-radius: 1rem;
`

export default function Home() {
  return (
    <Caixa>
      <ThemeToggleButton />
      <h1 className="text-2xl font-bold">Bem-vindo ao chat da FÚRIA!</h1>
    </Caixa>
  )
}
