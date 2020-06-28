import {combineReducers} from 'redux';

import specialityListStore from './specialityList/reducer';
import doctorListStore from './doctorList/reducer';
import doctorStore from './doctor/reducer';

export default combineReducers({
   specialityListStore,
   doctorListStore,
   doctorStore
});
