import React from 'react';
import { RoutePropsStrict } from './types';
import {
  NotFound,
  About,
  Ferahar,
} from '../pages';

const routes: RoutePropsStrict[] = [
  {
    path: '/',
    element: <About />,
    title: 'Эбоут!',
  },
  {
    path: '/ferahar',
    element: <Ferahar />,
    title: 'ferahar!',
  },
  {
    path: '*',
    element: <NotFound />,
  },
];


export {
  routes,
};
