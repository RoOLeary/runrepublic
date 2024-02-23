'use client';

import React, { Fragment, useMemo } from 'react';

import HeaderLogged from '@/components/Header/HeaderLogged';
import { useThemeMode } from '@/hooks/useThemeMode';

const SiteHeader = () => {
  useThemeMode();
  const headerComponent = useMemo(() => {
    const HeadComponent = HeaderLogged;
    return <HeadComponent />;
  }, []);

  return <>{headerComponent}</>;
};

export default SiteHeader;
