import { makeAutoObservable } from 'mobx';
import { UserModel } from '../../models';
import { getUser } from '../../api/apiUser';
import { StoreUserInterface } from './types';

const userMock: UserModel = {
  personName: 'Bruce Wayne',
  personInfo: 'В другом офисе',
  personStatus: 'available',
  personAvatarUrl: '/user_bw.png',
};


// class StoreUser {
class StoreUser implements StoreUserInterface {

  constructor() {
    makeAutoObservable(this);
  }

  isLogged = true;
  isLoading = false;
  isError = false;

  setLogged = (value: boolean) => this.isLogged = value;

  user: UserModel | null = null;

  fetchUser = async () => {
    try {
      this.isLoading = true;
      const result = await getUser();
      if (result.data === null) {
        this.isError = true;
      }
      this.user = result.data;
    } finally {
      this.isLoading = false;
    }
  };

  fetchUserMock = () => {
    this.user = userMock;
  };

}

const storeUser = new StoreUser();
export default storeUser;

