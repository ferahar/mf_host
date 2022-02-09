import './app-messages.scss';
import React from 'react';
import { observer } from 'mobx-react-lite';
import { SnackBar } from '@consta/uikit/SnackBar';
import { storeMessages } from '../../services/common';


const AppMessages = () => {
  const { list } = storeMessages;

  if (list.length <= 0) {
    return null;
  }

  return <SnackBar
    items={list}
    className="app-messages"
  />;
};

export default observer(AppMessages);
