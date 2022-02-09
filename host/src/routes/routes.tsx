import React from 'react';
import {
  NotFound,
  AboutPage,
  Ferahar,
  KfaPage,
} from '../pages';
import { RoutePropsStrict } from './types';

const routes: RoutePropsStrict[] = [
  {
    path: '/',
    title: 'Аналитика',
    element: <AboutPage />,
  },
  {
    path: '/about',
    title: 'About',
    element: <AboutPage />,
  },
  {
    path: '/kfa/*',
    title: 'KFA',
    element: <KfaPage />,
  },
  {
    path: '/ferahar',
    title: 'Ferahar (remove)',
    element: <Ferahar />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

// const routesAuth: RoutePropsStrict[] = [
//   {
//     path: '/',
//     component: LoginPage,
//     exact: true,
//   },
//   {
//     path: '*',
//     component: NotFound,
//     exact: false,
//   },
// ];

export {
  routes,
};
