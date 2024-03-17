import axios from 'axios';

const baseURL =
  process.env.VITE_ENVIRONMENT === 'development'
    ? process.env.VITE_DEV_API_URL
    : process.env.VITE_PROD_API_URL;

const headers = {
  'Content-Type': 'application/json'
};

export const axiosInstance = axios.create({
  baseURL,
  headers
});
