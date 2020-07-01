import {combineReducers} from 'redux';
import myBlogStore from "./myblog/store/reducers";
import commonStoreNP from "./common/store/reducers";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const commonPersistConfig = {
   key: 'commonStore',
   storage,
   whitelist: ['authStore']
}

const commonStore = persistReducer(commonPersistConfig, commonStoreNP)

export default combineReducers({
   myBlogStore,
   commonStore
})
;
