import {handleActions} from 'redux-actions';
import {doctorList} from './actions';

const initialState = {
   doctorList: [],
   error: null,
   loading: false,
};

export default handleActions(
   {
      [doctorList.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [doctorList.load.success]: (state, action) => ({
         ...initialState,
         doctorList: action.payload
      }),
      [doctorList.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
