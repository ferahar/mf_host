import { RouteProps } from 'react-router-dom';

export interface RoutePropsStrict extends RouteProps {
  path: string,
  title?: string,
}

export interface AppRoutes {
  visible: RoutePropsStrict[];
  auth: RoutePropsStrict[];
}
