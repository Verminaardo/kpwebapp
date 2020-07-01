import { handleActions } from 'redux-actions';
import { auth } from './actions';

const initialState = {
   currentUser: null,
   jwt: null,
   error: null,
   loading: false
};

export default handleActions(
   {
      [auth.request]: (state) => ({
         ...state,
         loading: true
      }),
      [auth.success]: (state, action) => ({
         ...initialState,
         currentUser: action.payload.user,
         jwt: action.payload.jwt
      }),
      [auth.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
