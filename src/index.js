import React from 'react';
import ReactDOM from 'react-dom';
import { Analytics } from '@vercel/analytics/react';
import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
      <Analytics />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
