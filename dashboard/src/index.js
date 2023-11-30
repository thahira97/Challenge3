import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InputContextProvider } from './store/input-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <InputContextProvider>
      <App />
    </InputContextProvider>
  </React.StrictMode>
);

