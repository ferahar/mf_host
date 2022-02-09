import React from 'react';
import { Navigate } from 'react-router-dom';
import { RoutePropsStrict } from '../../routes/types';
import KfaTabFirst from './KfaTabFirst';
import KfaTabSecond from './KfaTabSecond';

const routes: RoutePropsStrict[] = [
  {
    path: '*',
    element: <Navigate to="first" replace />,
  },
  {
    path: 'first',
    index: true,
    element: <KfaTabFirst />,
  },
  {
    path: 'second',
    element: <KfaTabSecond />,
  },
];

export default routes;
