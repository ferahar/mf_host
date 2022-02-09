import React from 'react';
import { observer } from 'mobx-react-lite';
import { storeKfa } from '../../store';

const KfaTabFirst = () => {
  const { counter } = storeKfa;
  return (
    <div className="margin-l">
      <h1>Title first {counter}</h1>
      <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus facilis nam reiciendis.</h3>
    </div>
  );
};

export default observer(KfaTabFirst);