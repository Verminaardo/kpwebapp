import {createActions} from 'redux-actions';
import {loadActions} from '../../../common/utils/constants';

export const {newsDetail} = createActions({
   NEWS_DETAIL: {
      ...loadActions
   }
});
