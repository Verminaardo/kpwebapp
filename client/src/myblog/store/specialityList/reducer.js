import {handleActions} from 'redux-actions';
import {specialityList} from './actions';

const initialState = {
   specialityList: [],
   error: null,
   loading: false,
};

export default handleActions(
   {
      [specialityList.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [specialityList.load.success]: (state, action) => ({
         ...initialState,
         specialityList: action.payload
      }),
      [specialityList.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
