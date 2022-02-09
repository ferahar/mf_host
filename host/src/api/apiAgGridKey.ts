import axios from 'axios';
import API from './API';

export const BASE_URL = '/';

const API_TOKEN = axios.create({
  baseURL: BASE_URL,
  responseType: 'text',
  headers: {
    'content-type': 'text/plain',
  },
});

const getApiAgGridKey = () => {
  return API.get<string>('ag_grid_token/');
};

export default API_TOKEN;

export {
  getApiAgGridKey,
};
