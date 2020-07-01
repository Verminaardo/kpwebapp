import {handleActions} from 'redux-actions';
import {newsDetail} from './actions';

const initialState = {
   newsDetail: {},
   error: null,
   loading: false,
};

export default handleActions(
   {
      [newsDetail.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [newsDetail.load.success]: (state, action) => ({
         ...initialState,
         newsDetail: action.payload
      }),
      [newsDetail.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
