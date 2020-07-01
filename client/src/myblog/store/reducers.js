import {combineReducers} from 'redux';

import newsListStore from './newsList/reducer';
import newsDetailStore from './newsDetail/reducer'
import commentSendStore from './sendComment/reducer'

export default combineReducers({
   newsListStore,
   newsDetailStore,
   commentSendStore
});
