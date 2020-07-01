import { createActions } from 'redux-actions';
import { asyncActions } from '../../utils/constants';

export const { auth } = createActions({
   AUTH: asyncActions
});
