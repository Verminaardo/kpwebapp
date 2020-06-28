import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import {composeWithDevTools} from 'redux-devtools-extension';

import logger from 'redux-logger';
import {default as thunk} from 'redux-thunk';

import App from './App';
import rootReducer from './RootReducer';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/css/logo.css";
import "./assets/css/profile.css";

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

render(
   <BrowserRouter>
      <Provider store={store}>
         <Route path="/" component={App}/>
      </Provider>
   </BrowserRouter>,
   document.getElementById('root')
);
