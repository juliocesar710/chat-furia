import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  gap: 0.25rem;
  padding: 0.5rem 1rem;
  background: ${p => p.theme.colors.card};
  border-radius: 1rem;
`;

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: ${p => p.theme.colors.accent};
  animation: bounce 1.4s infinite ease-in-out;

  &:nth-child(1) { animation-delay: 0s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-0.5rem); }
  }
`;

export default function TypingIndicator() {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
    </Container>
  );
}