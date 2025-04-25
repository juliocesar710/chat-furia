import styled from "styled-components";

const Container = styled.div`
  background: ${(p) =>
    p.isUser ? "linear-gradient(135deg, #ff4655, #e53947)" : p.theme.colors.card};
  color: ${(p) => (p.isUser ? "#fff" : p.theme.colors.text)};
  padding: 1rem 1.2rem;
  border-radius: ${(p) => p.theme.radius.card};
  margin-bottom: 1rem;
  max-width: 80%;
  align-self: ${(p) => (p.isUser ? "flex-end" : "flex-start")};
  word-break: break-word;
  box-shadow: 0 4px 12px ${(p) => (p.isUser ? "rgba(255, 70, 85, 0.5)" : p.theme.colors.shadow)};
  border: 1px solid
    ${(p) => (p.isUser ? "#ff465577" : p.theme.colors.border)};
  transition: transform 0.2s ease;
  font-family: ${(p) => p.theme.font.family};

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  max-width: 100%;
  border-radius: ${(p) => p.theme.radius.card};
  margin-top: 0.75rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export default function Message({ text, isUser, data }) {
  return (
    <Container isUser={isUser}>
      {text}
      {data?.imagem && <Image src={data.imagem} alt="Resposta" />}
      {data?.footer && <p>{data.footer}</p>}
    </Container>
  );
}
