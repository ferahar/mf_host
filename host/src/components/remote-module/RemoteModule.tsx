import React, { FC } from 'react';
import { storeMessages, storeShell, storeUser } from '../../services/common';
import { ErrorBoundaryModule } from '../error-boundary';
import { PropModule } from './types';

const RemoteModule: FC<PropModule> = props => {
  const { module } = props;
  const Module = module;
  return (
    <ErrorBoundaryModule>
      <React.Suspense fallback="Loading module...">
        <Module
          storeMessages = {storeMessages}
          storeUser = {storeUser}
          storeShell = {storeShell}
        />
      </React.Suspense>
    </ErrorBoundaryModule>
  );
};

export default RemoteModule;
