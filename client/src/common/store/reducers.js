import {combineReducers} from 'redux';

import notificationStore from './notifications/reducer';
import authStore from './auth/reducer'

export default combineReducers({
   notificationStore,
   authStore
});
