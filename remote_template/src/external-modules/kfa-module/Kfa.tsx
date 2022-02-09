import React from 'react';
import { hostStoreInit } from './hostStore';
import getRoutes from '../../routes/getRoutes';
import routes from './routes';

const Kfa = (props: ShellStore) => {

  //todo: singleton
  hostStoreInit(props);

  return (
    <div className="margin-l">
      <h1>KfaModule loading success!</h1>
      {getRoutes(routes)}
    </div>
  );
};


export default Kfa;
