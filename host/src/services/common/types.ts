import { UserModel } from '../../models';

interface StoreUserInterface {
  isLogged: boolean,
  isLoading: boolean,
  isError: boolean,

  setLogged: (value: boolean) => void,

  user: UserModel | null;

  fetchUser: () => void,

  fetchUserMock: () => void,
}

export {
  StoreUserInterface,
};

