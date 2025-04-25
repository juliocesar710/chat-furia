import styled from "styled-components";
import { useState, useEffect } from "react";
import CommandPalette from "../components/CommandPalette";
import { getCommandResponse, loadCommands } from "../data";
import Message from "../utils/Message.jsx";
import TypingIndicator from "../utils/TypingIndicator.jsx";

const Container = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 1rem;
`;

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(p) => p.theme.colors.accent};
`;

const ChatBox = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background-color: ${(p) => p.theme.colors.card || "#fff"};
  border-radius: 1rem;
  margin-bottom: 1rem;
  border: 1px solid ${(p) => p.theme.colors.border};
`;

const InputArea = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  background-color: ${(p) => p.theme.colors.inputBackground || "#f0f0f0"};
  color: ${(p) => p.theme.colors.text};
  font-size: 1rem;
`;

const SendButton = styled.button`
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.background};
  font-weight: bold;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background-color: ${(p) => p.theme.colors.accentHover};
  }
`;

const HelpButton = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.background};
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 100;

  &:hover {
    background-color: ${(p) => p.theme.colors.accentHover};
    transform: scale(1.05);
  }
`;
export default function Chat() {
  const [input, setInput] = useState("");
  const [showCommands, setShowCommands] = useState(false);
  const [commandsLoaded, setCommandsLoaded] = useState(false);

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      await loadCommands();
      setCommandsLoaded(true);
    };
    load();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    if (input === "/clear") {
      setMessages([]);
      setInput("");
      return;
    }
  
    if (!commandsLoaded) {
      setMessages((prev) => [
        ...prev,
        {
          text: "⚠️ Comandos ainda estão carregando. Tente novamente em alguns segundos.",
          isUser: false,
          timestamp: new Date(),
        },
      ]);
      return;
    }
  
    setMessages((prev) => [
      ...prev,
      {
        text: input,
        isUser: true,
        timestamp: new Date(),
      },
    ]);
  
    setIsLoading(true);
    setInput("");
  
    const command = input.startsWith("/") ? input.slice(1) : input;
    const response = await simulateAPI(command);
  
    setMessages((prev) => [
      ...prev,
      {
        text: response.resposta,
        isUser: false,
        timestamp: new Date(),
        data: response,
      },
    ]);
  
    setIsLoading(false);
  };

  const simulateAPI = async (command) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const response = await getCommandResponse(command);
  
    return response.response ? { resposta: response.response, ...response } : response;
  };
  return (
    <Container>
      <Header>Chat com a FÚRIA 🐾</Header>
      <ChatBox>
        {messages.length === 0 ? (
          <p style={{ opacity: 0.6 }}>
            Digite um comando como "/jogos" para começar
          </p>
        ) : (
          messages.map((msg, i) => (
            <Message
              key={i}
              text={msg.text}
              isUser={msg.isUser}
              data={msg.data}
            />
          ))
        )}
        {isLoading && <TypingIndicator />}
      </ChatBox>
      <InputArea onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Digite seu comando..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!commandsLoaded || isLoading}
        />
        <SendButton type="submit" disabled={!commandsLoaded || isLoading}>
          {isLoading ? "Carregando..." : "Enviar"}
        </SendButton>
      </InputArea>

      <HelpButton onClick={() => setShowCommands(true)}>?</HelpButton>

      <CommandPalette
        isOpen={showCommands}
        onClose={() => setShowCommands(false)}
      />
    </Container>
  );
}
