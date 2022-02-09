import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import { getRoutes, routeInclude, routes } from '../../routes';
import { storeShell } from '../../services/common';
import AppMessages from '../app-messages';

// import remoteRoutes from 'remote_template/routes';
// import { RoutePropsStrict } from '../../routes/types';
//
// const routes = [...hostRoutes, ...remoteRoutes as RoutePropsStrict[]];

//TODO: rule exist user hook isLogged
const routeItems = getRoutes(routes);

export  default function App() {
  const { pathname } = useLocation();
  const { setTitle } = storeShell;

  useEffect(() => {
    // getUser();
    const rout = routes.filter(item => routeInclude(pathname, item.path))[0];
    if (rout && rout.title) {
      setTitle(rout.title);
    }

  }, []);
  return (
    <Theme preset={presetGpnDefault}>
      <React.Suspense fallback={<div>Loading...</div>}>
        {routeItems}
      </React.Suspense>
      <AppMessages />
    </Theme>
  );
}
