import React from 'react';
import { Loader } from '@consta/uikit/Loader';
import { Informer } from '@consta/uikit/Informer';
import { DataStatus } from '../../typings';

type StatusElementProps = {
  dataStatus: DataStatus,
};

const StatusElement = ({ dataStatus } : StatusElementProps): JSX.Element | null => {
  if (dataStatus) {
    switch (dataStatus.type) {
      case 'loading':
        return <div className="container container_justify_s-b container_align-items-center padding-h-xl"><Loader size="m" /></div>;
      case 'calculating':
      case 'error':
        return <Informer status={dataStatus.type === 'calculating' ? 'system' : 'warning'} view='filled' title={dataStatus.status} label={dataStatus.message} />;
      default:
        return null;
    }
  } else {
    return null;
  }
};

export default StatusElement;
