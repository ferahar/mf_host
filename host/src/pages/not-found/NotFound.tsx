import React from 'react';
import { Responses404 } from '@consta/uikit/Responses404';
import MainHeader from '../../components/main-header/MainHeader';

export default function NotFound() {
  return (
    <main className="container container_column container_main">
      <MainHeader />
      <div className="container container_column container_auto padding-t-l">
        <Responses404 />
      </div>
    </main>

  );
}
