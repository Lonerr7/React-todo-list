import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import store from './redux/redux-store';
import App from './App';
import store, { persister } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persister}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
