import {createActions} from 'redux-actions';
import {loadActions} from '../../../common/utils/constants';

export const {specialityList} = createActions({
   SPECIALITY_LIST: loadActions
});
