import {createActions} from 'redux-actions';
import {loadActions} from '../../../common/utils/constants';

export const {doctorList} = createActions({
   DOCTOR_LIST: {
      ...loadActions
   }
});
