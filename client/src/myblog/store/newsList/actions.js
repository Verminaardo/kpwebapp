import {createActions} from 'redux-actions';
import {loadActions} from '../../../common/utils/constants';

export const {newsList} = createActions({
   NEWS_LIST: {
      ...loadActions
   }
});
