import React from 'react';
import MessageShow from './MessageKfa';
import { observer } from 'mobx-react-lite';
import { storeKfa } from '../../store';

const KfaTabSecond = () => {
  const { counter } = storeKfa;
  return (
    <div className="margin-l">
      <h1>Title first </h1>
      <h3>Click dino: {counter}</h3>
      <MessageShow />
    </div>
  );
};

export default observer(KfaTabSecond);