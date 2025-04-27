import styled from 'styled-components';
import { useEffect } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 5rem;
`;

const PaletteContainer = styled.div`
  background: ${(p) => p.theme.colors.card};
  border-radius: 0.5rem;
  width: 90%;
  max-width: 600px;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid ${(p) => p.theme.colors.border};
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  background: transparent;
  color: ${(p) => p.theme.colors.text};
  outline: none;
`;

const CommandList = styled.div`
  padding: 0.5rem;
`;

const CommandItem = styled.div`
  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  
  &:hover {
    background: ${(p) => p.theme.colors.accent}20;
  }
`;

const CommandTitle = styled.span`
  font-weight: 500;
`;

const CommandDescription = styled.span`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const CommandShortcut = styled.span`
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.8rem;
  padding: 0.2rem 0.4rem;
  background: ${(p) => p.theme.colors.input};
  border-radius: 0.25rem;
`;

export default function CommandPalette({ isOpen, onClose, onCommandSelect }) {
  const commands = [
    {
      title: "Próximos jogos",
      description: "Mostra os próximos jogos da FURIA",
      shortcut: "/jogos"
    },
    {
      title: "Últimos resultados",
      description: "Mostra os resultados dos últimos jogos",
      shortcut: "/resultados"
    },
    {
      title: "Jogadores",
      description: "Lista todos os jogadores do time",
      shortcut: "/jogadores"
    },
    {
      title: "Eventos",
      description: "Mostra as últimas notícias do time",
      shortcut: "/eventos"
    },
    {
      title: "Loja",
      description: "Link para a loja oficial da FURIA",
      shortcut: "/loja"
    },
    {
      title:"comunidade",
      description: "A comunidade da FURIA",
      shortcut: "/comunidade"
    },
    {
      title: "fanarts",
      description: "Fanarts da FURIA",
      shortcut: "/fanarts"
    },
    {
      title:"fotosCS2",
      description: "Fotos do time do CS2",
      shortcut: "/fotosCS2"
    }
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <PaletteContainer onClick={(e) => e.stopPropagation()}>
        <SearchInput 
          placeholder="Digite um comando ou pesquise..."
          autoFocus
        />
        <CommandList>
          {commands.map((cmd, index) => (
            <CommandItem 
              key={index}
              onClick={() => onCommandSelect(cmd.shortcut)}
            >
              <div>
                <CommandTitle>{cmd.title}</CommandTitle>
                <CommandDescription>{cmd.description}</CommandDescription>
              </div>
              <CommandShortcut>{cmd.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandList>
      </PaletteContainer>
    </Overlay>
  );
}