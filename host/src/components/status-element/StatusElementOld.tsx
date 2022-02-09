import { Loader } from '@consta/uikit/Loader';
import { Informer } from '@consta/uikit/Informer';
import React from 'react';

type StatusElementOldProps = {
  loading: boolean;
  error: boolean;
};

const StatusElementOld = ({ loading, error }: StatusElementOldProps): JSX.Element | null => {
  if (loading) {
    return <div className="container container_justify_s-b container_align-items-center padding-h-xl"><Loader size="m" /></div>;
  } else if (error) {
    return <Informer status="warning" view='filled' title='Данные не получены' label='Попробуйте перезапустить сервис или обратитесь к авторам сервиса.' />;
  }

  return null;
};

export default StatusElementOld;
