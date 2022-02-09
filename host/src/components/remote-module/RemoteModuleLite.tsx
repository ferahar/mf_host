import React, { FC } from 'react';
import { ErrorBoundaryLite } from '../error-boundary';
import { Loader } from '@consta/uikit/Loader';
import { PropModule } from './types';

const RemoteModuleLite: FC<PropModule> = props => {
  const { module } = props;
  const Module = module;

  return (
    <ErrorBoundaryLite>
      <React.Suspense fallback={<Loader size='s' />} >
        <Module />
      </React.Suspense>
    </ErrorBoundaryLite>
  );
};

export default RemoteModuleLite;
