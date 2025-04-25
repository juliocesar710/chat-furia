const commands = {};

export const loadCommands = async () => {
  const modules = import.meta.glob('./commands/*.json');
  
  for (const path in modules) {
    const module = await modules[path]();
    Object.assign(commands, module.default || module);
  }
};

export const getCommandResponse = (command) => {
  return commands[command] || {
    resposta: "❌ Comando não reconhecido. Digite /ajuda para ver os comandos.",
    tipo: "erro"
  };
};