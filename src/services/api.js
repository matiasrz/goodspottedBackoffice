import axios from 'axios';

const apiURL = process.env.REACT_APP_BASE_URL;

axios.defaults.baseURL = apiURL;
axios.defaults.headers.common = {
  'Access-Control-Allow-Origin': '<origin> | *',
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'JWT_AUD': 'backoffice'
};

export const unauthInstance = axios.create();

export const authInstance = axios.create({
  headers: {
    'Authorization': 'JWT TOKEN AFTER LOGIN', 
  }
});

