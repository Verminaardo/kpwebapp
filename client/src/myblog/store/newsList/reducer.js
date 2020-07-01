import {handleActions} from 'redux-actions';
import {newsList, newsListCount} from './actions';

const initialState = {
   newsList: [],
   error: null,
   loading: false,
   count: null
};

export default handleActions(
   {
      [newsList.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [newsList.load.success]: (state, action) => ({
         ...state,
         newsList: action.payload,
         loading: false
      }),
      [newsList.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      }),
      [newsListCount.load.request]: (state) => ({
         ...state,
      }),
      [newsListCount.load.success]: (state, action) => ({
         ...state,
         count: action.payload
      }),
      [newsListCount.load.error]: (state, action) => ({
         ...state,
         error: action.payload
      })
   },
   initialState
);
