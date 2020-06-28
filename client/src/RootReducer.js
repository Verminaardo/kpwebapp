import {combineReducers} from 'redux';
import hospitalStore from "./hospital/store/reducers";
import commonStore from "./common/store/reducers";

export default combineReducers({
   hospitalStore,
   commonStore
});
