import {createActions} from 'redux-actions';

export const {notification} = createActions({
   NOTIFICATION: {
      ADD: (title, message, level) => ({title, message, level}),
      CUSTOM: null
   }
});
