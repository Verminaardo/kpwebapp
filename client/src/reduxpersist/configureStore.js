import {applyMiddleware, createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../RootReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import {default as thunk} from "redux-thunk";
import logger from "redux-logger";

const persistConfig = {
   key: 'root',
   storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleware = [thunk, logger];

export default () => {
   let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
   let persistor = persistStore(store)
   return { store, persistor }
}