import API from './API';
import { UserModel } from '../models';

const getUser = () => {
  return API.get<UserModel>('user');
};

export { getUser };

