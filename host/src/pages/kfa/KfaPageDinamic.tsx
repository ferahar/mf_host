import React from 'react';
import MainHeader from '../../components/main-header/MainHeader';
import RemoteComponent from '../../components/remote-component-dinamic';


const kfaApp = {
  url: 'http://localhost:5003/remoteEntry.js',
  scope: 'app_kfa',
  module: './Kfa',
};

const kfaToolbar = {
  url: '/module-kfa',
  scope: 'app_kfa',
  module: './KfaToolbar',
};

const KfaPageDinamic = () => {

  return (
    <main className="container container_column container_main">
      <MainHeader>
        <RemoteComponent system={kfaToolbar} isLite={true} />
      </MainHeader>
      <div className="container container_column container_auto">
        <RemoteComponent system={kfaApp} />
      </div>
    </main>
  );

};

export default KfaPageDinamic;
