import {combineReducers} from 'redux';

import newsListStore from './newsList/reducer';
import newsDetailStore from './newsDetail/reducer'

export default combineReducers({
   newsListStore,
   newsDetailStore
});
