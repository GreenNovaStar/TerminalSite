import React from 'react';
import { Experience } from '../../components/Experience';

export const experienceCommand = async (
  args: string[],
): Promise<React.ReactNode> => <Experience />;
