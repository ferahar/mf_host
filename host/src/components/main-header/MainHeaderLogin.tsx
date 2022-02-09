import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { storeUser } from '../../services/common';
import { HeaderLogin } from '@consta/uikit/Header';
import { Loader } from '@consta/uikit/Loader';


const MainHeaderLogin = ()=> {
  const { user, isLogged, isLoading, fetchUserMock  } = storeUser;

  useEffect(() => {
    // todo: void fetchUser();
    fetchUserMock();
  }, []);

  if (isLoading) {
    return (
      <Loader size="s" />
    );
  }

  if (user) {
    return (
      <HeaderLogin
        isLogged={isLogged}
        personName={user.personName}
        personInfo={user.personInfo}
        personStatus={user.personStatus}
        personAvatarUrl={user.personAvatarUrl}
      />
    );
  }
  return null;
};

export default observer(MainHeaderLogin);
