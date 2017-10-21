import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import { BrowserRouter } from 'react-router-dom'
import App from '@pages/App.js';
import store from './stores'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider {...store}>
    <BrowserRouter><App /></BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
