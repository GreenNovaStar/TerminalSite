import React from 'react';
import { Sumfetch } from '../../components/Sumfetch';

export const sumfetch = async (args: string[]): Promise<React.ReactNode> =>
  React.createElement(Sumfetch, { title: 'sumfetch' });

export const neofetch = async (args: string[]): Promise<React.ReactNode> =>
  React.createElement(Sumfetch, { title: 'neofetch' });

export default sumfetch;
