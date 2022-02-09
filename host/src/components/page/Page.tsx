import React, { FC } from 'react';
import MainHeader from '../main-header/MainHeader';


const Page: FC<PageModuleProps> = props => {
  const { children } = props;

  return (
    <main className="container container_column container_main">
      <MainHeader />
      <div className="container container_column container_auto">
        { children }
      </div>
    </main>
  );
};

export default Page;
