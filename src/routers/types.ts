import type { Route as NextRouter } from 'next';
import type { ComponentType } from 'react';

export type Route<T = string> = NextRouter<string>;
export type PathName = Route<string>;

export interface Page {
  path: PathName;
  exact?: boolean;
  component: ComponentType<Object>;
}
