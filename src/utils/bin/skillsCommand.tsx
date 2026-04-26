import React from 'react';
import { Skills } from '../../components/Skills';

export const skillsCommand = async (args: string[]): Promise<React.ReactNode> => {
  return <Skills />;
};
