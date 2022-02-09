import axios from 'axios';

const API_URL = process.env.API_URL!;
export const BASE_URL = API_URL + '/api/iasurgg/web/';

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  // withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

export default API;
