// Module-level log of executed commands so bin commands (which only receive
// args) can read what the user has typed this session.
const log: string[] = [];

export const recordCommand = (command: string) => {
  log.push(command);
};

export const getCommandHistory = (): string[] => [...log];
