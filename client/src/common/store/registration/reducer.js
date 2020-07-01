import { handleActions } from 'redux-actions';
import { registration } from './actions';

const initialState = {
   error: null,
   isProcessed: false
};

export default handleActions(
   {
      [registration.request]: (state) => ({
         ...state,
         isProcessed: true
      }),
      [registration.success]: (state, action) => ({
         ...initialState
      }),
      [registration.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
