import {createActions} from 'redux-actions';
import {loadActions} from '../../../common/utils/constants';

export const {doctor} = createActions({
   DOCTOR: {
      ...loadActions
   }
});
