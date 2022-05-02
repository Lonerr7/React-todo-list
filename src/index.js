import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './redux/redux-store';
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
