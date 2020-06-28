import {handleActions} from 'redux-actions';
import {doctor} from './actions';

const initialState = {
   doctor: {},
   error: null,
   loading: false,
};

export default handleActions(
   {
      [doctor.load.request]: (state) => ({
         ...state,
         loading: true
      }),
      [doctor.load.success]: (state, action) => ({
         ...initialState,
         doctor: action.payload
      }),
      [doctor.load.error]: (state, action) => ({
         ...initialState,
         error: action.payload
      })
   },
   initialState
);
