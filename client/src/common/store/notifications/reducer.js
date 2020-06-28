import {handleActions} from 'redux-actions';
import {notification} from './actions';
import uniqueId from 'lodash/uniqueId';

const DEFAULT_DISMISS_PROPS = {
   autoDismiss: 5,
   dismissible: 'both'
};
const WARN_DISMISS_PROPS = {
   autoDismiss: 0,
   dismissible: 'button'
};

const getDismissOptionsByLevel = (level) =>
   level === 'error' || level === 'warning' ? WARN_DISMISS_PROPS : DEFAULT_DISMISS_PROPS;

const initialState = {
   id: '',
   title: '',
   message: '',
   ...DEFAULT_DISMISS_PROPS,
   level: ''
};

export default handleActions(
   {
      [notification.add]: (state, {payload = {}}) => ({
         ...payload,
         ...getDismissOptionsByLevel(payload.level),
         id: uniqueId()
      }),
      [notification.custom]: (state, {payload = {}}) => payload
   },
   initialState
);
