import styled from "styled-components";

// Container da mensagem
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
  border: 1px solid ${(p) => (p.isUser ? "#ff465577" : p.theme.colors.border)};
  transition: transform 0.2s ease;
  font-family: ${(p) => p.theme.font.family};

  &:hover {
    transform: scale(1.02);
  }
`;

const Image = styled.img`
  max-width: 50%;
  border-radius: ${(p) => p.theme.radius.card};
  margin-top: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: 2px solid #ff4655;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function formatText(text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, i) =>
    urlRegex.test(part) ? (
      <a
        key={i}
        href={part}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#ff4655", textDecoration: "underline" }}
      >
        {part}
      </a>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Message({ text, isUser, data }) {
  return (
    <Container isUser={isUser}>
      {formatText(text)}
      {data?.image && <Image src={data.image} alt="Resposta" />}
      {data?.footer && <p>{data.footer}</p>}
    </Container>
  );
}
