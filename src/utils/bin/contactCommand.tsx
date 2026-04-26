import React from 'react';
import { Contact } from '../../components/Contact';

export const contactCommand = async (args: string[]): Promise<React.ReactNode> => {
  return <Contact />;
};
