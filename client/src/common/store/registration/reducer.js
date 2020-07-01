import { handleActions } from 'redux-actions';
import { registration } from './actions';

const initialState = {
   error: null,
   isSuccess: false
};

export default handleActions(
   {
      [registration.request]: (state) => ({
         ...state,
      }),
      [registration.success]: (state, action) => ({
         ...initialState,
         isSuccess: true
      }),
      [registration.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
