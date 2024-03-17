import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import { isEmptyString, queryClient } from 'utils';
import { Routes } from 'routes';

if (
  isEmptyString(process.env.VITE_DEV_API_URL) ||
  isEmptyString(process.env.VITE_PROD_API_URL) ||
  isEmptyString(process.env.VITE_ENVIRONMENT)
) {
  throw new Error('Invalid .env config');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>
);
