import { createActions } from 'redux-actions';
import { asyncActions } from '../../utils/constants';

export const { registration } = createActions({
   REGISTRATION: asyncActions
});
