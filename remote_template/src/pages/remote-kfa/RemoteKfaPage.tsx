import React from 'react';
import Kfa from '../../external-modules/kfa-module/Kfa';

const RemoteKfaPage = () => {
  return (
    <main className="container container_column container_main">
      <div className="container container_column container_auto">
        <div className="margin-l">
          <Kfa />
        </div>
      </div>
    </main>
  );
};

export default RemoteKfaPage;