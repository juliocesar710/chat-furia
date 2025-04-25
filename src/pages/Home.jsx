import styled from "styled-components";
import ThemeToggleButton from "../components/ThemeToggleButton";
import { Link } from "react-router-dom";

// Estilização
const Container = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  padding: 3rem 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
`;


const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.accent};
`;

const Description = styled.p`
  max-width: 600px;
  margin: 1rem 0 2rem;
  text-align: center;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 1.1rem;
`;

const Features = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  max-width: 900px;
  margin-top: 2rem;
`;

const FeatureCard = styled(Link)`
  background-color: ${(p) => p.theme.colors.card};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radius.card};
  padding: 1.5rem;
  box-shadow: 0 0 10px ${(p) => p.theme.colors.shadow};
  text-decoration: none; // Remove o sublinhado do link
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureTitle = styled.h3`
  color: ${(p) => p.theme.colors.accent};
  margin-bottom: 0.5rem;
`;

const FeatureText = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.95rem;
`;

export default function Home() {
  return (
    <Container>
      <ThemeToggleButton />
      <Header>
        <img
          src="src\assets\furiaLogo.png"
          alt="FURIA Logo"
          width="60"
          height="60"
        />
        <Title>Bem-vindo ao chat da FÚRIA!</Title>
      </Header>
      <Description>
        Aqui, você pode conversar com nosso bot para tirar dúvidas, receber
        atualizações e viver a experiência FÚRIA com estilo e rapidez.
      </Description>
      <Features>
        <FeatureCard to="/chat">
          <FeatureTitle>🤖 Respostas Instantâneas</FeatureTitle>
          <FeatureText>
            Tire dúvidas sobre jogos, horários, eventos ou curiosidades do
            universo FURIA.
          </FeatureText>
        </FeatureCard>
        <FeatureCard to="/chat">
          <FeatureTitle>📰 Últimas Notícias</FeatureTitle>
          <FeatureText>
            Fique por dentro dos próximos confrontos e novidades do time em
            tempo real.
          </FeatureText>
        </FeatureCard>
        <FeatureCard to="/chat">
          <FeatureTitle>🎮 Integração com Discord</FeatureTitle>
          <FeatureText>
            Conecte-se diretamente com a comunidade usando comandos rápidos.
          </FeatureText>
        </FeatureCard>
      </Features>
    </Container>
  );
}
