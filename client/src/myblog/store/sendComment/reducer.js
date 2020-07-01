import { handleActions } from 'redux-actions';
import { sendCommentary } from './actions';

const initialState = {
   error: null,
   isSuccess: false
};

export default handleActions(
   {
      [sendCommentary.request]: (state) => ({
         ...initialState,
      }),
      [sendCommentary.success]: (state, action) => ({
         ...initialState,
         isSuccess: true
      }),
      [sendCommentary.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
