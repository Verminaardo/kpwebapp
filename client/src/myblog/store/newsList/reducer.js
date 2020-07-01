import {handleActions} from 'redux-actions';
import {newsList} from './actions';

const initialState = {
   newsList: [],
   error: null,
   loading: false,
};

export default handleActions(
   {
      [newsList.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [newsList.load.success]: (state, action) => ({
         ...initialState,
         doctorList: action.payload
      }),
      [newsList.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
