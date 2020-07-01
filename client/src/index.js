import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import App from './App';
import {PersistGate} from 'redux-persist/integration/react'
import configureStore from './reduxpersist/configureStore'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/logo.css";
import "./assets/css/profile.css";
import "./assets/css/all.css";
import '@trendmicro/react-modal/dist/react-modal.css';

const config = configureStore()
const store = config.store
export const persistor = config.persistor

render(
   <BrowserRouter>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistor}>
            <Route path="/" component={App}/>
         </PersistGate>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);
