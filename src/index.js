import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import   {persistor}  from "./redux/store"
import store from "./redux/store";


import {App} from 'components/App';
import './Css/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/goit-react-hw-08-phonebook'>
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
  </Provider>
  </BrowserRouter>
);