import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { Routes } from 'routes';
import { checkEnvConfig, queryClient } from 'utils';
import './index.css';

checkEnvConfig(
  process.env.VITE_DEV_API_URL,
  process.env.VITE_PROD_API_URL,
  process.env.VITE_ENVIRONMENT
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </React.StrictMode>
);
