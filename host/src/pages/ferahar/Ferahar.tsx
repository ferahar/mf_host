import React from 'react';
import MainHeader from '../../components/main-header';
import { Button } from '@consta/uikit/Button';
import useGenerateMessage from './generateMessage';


export default function Ferahar() {
  const { generate } = useGenerateMessage();

  return (
    <main className="container container_column container_main">
      <MainHeader>
        <Button
          label='Message'
          onClick={ () => generate() }
        />
      </MainHeader>
      <div className="container container_column container_auto">
        <div className="padding-l">
          <h2>Test message mobx</h2>
        </div>
      </div>
    </main>
  );
}
