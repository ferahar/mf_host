import { Button } from '@consta/uikit/Button';
import React from 'react';
import hostStore from './hostStore';

const MessageShow = () => {
  const { setMessage } = hostStore.storeMessages as ShellStoreMessage;
  return (
    <>
      <h4>Message</h4>
      <Button
        label="New message"
        onClick={() => {
          setMessage('I am Drago! R-r-r', 'alert');
        }}
      />
    </>
  );
};

export default MessageShow;
