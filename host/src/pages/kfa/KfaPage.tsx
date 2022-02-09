import React from 'react';
import { RemoteModule, RemoteModuleLite } from '../../components/remote-module';
import MainHeader from '../../components/main-header/MainHeader';

const Kfa = React.lazy(() => import('remote_template/Kfa'));
const KfaToolbar = React.lazy(() => import('remote_template/KfaToolbar'));

const KfaPage = () => {
  return (
    <main className="container container_column container_main">
      <MainHeader>
        <RemoteModuleLite module={KfaToolbar} />
      </MainHeader>
      <div className="container container_column container_auto">
        <RemoteModule module={Kfa} />
      </div>
    </main>
  );
};

export default KfaPage;
