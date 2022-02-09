import { RouteProps } from 'react-router-dom';

export interface RoutePropsStrict extends RouteProps {
  path: string,
  title?: string,
  label?: string,
  redirect?: string,
  onClick?: () => void,
}
