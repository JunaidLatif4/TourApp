import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"

import App from './App';

import { Provider } from 'react-redux';
import tourAppData from './GlobalStae';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={tourAppData}>
      <App />
    </Provider>
  </BrowserRouter>
);