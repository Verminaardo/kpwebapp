import { createActions } from 'redux-actions';
import { asyncActions } from '../../../common/utils/constants';

export const { sendCommentary } = createActions({
   SEND_COMMENTARY: asyncActions
});
