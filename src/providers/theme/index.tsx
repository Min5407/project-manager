'use client';

import React from 'react';
import { useMount } from '@/hooks/use_mount';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { type ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const { isMount } = useMount();

  if (!isMount) return null;

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
