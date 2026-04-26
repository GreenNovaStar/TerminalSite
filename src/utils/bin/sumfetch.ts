import React from 'react';
import { Sumfetch } from '../../components/Sumfetch';

const sumfetch = async (args: string[]): Promise<React.ReactNode> => {
  return React.createElement(Sumfetch);
};

export default sumfetch;
