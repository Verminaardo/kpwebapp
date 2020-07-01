import {combineReducers} from 'redux';

import notificationStore from './notifications/reducer';
import authStore from './auth/reducer'
import registrationStore from './registration/reducer'

export default combineReducers({
   notificationStore,
   authStore,
   registrationStore
});
