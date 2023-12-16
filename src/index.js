import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UseProvider } from './Context/UseInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UseProvider>
      <App />
    </UseProvider>
  </BrowserRouter>
);
