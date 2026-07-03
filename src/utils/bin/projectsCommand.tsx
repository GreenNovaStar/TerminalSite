import React from 'react';
import { Projects } from '../../components/Projects';

export const projectsCommand = async (
  args: string[],
): Promise<React.ReactNode> => <Projects />;
