import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppContainer from './App';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
