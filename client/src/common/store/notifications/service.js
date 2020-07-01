import {notification} from './actions';
import {isArray} from "lodash"

export const notifyError = (error = {}, title, message) => {
   if (isArray(error.message)) {
      return notification.add(title, message || error.message[0].messages[0].message, 'error');
   } else {
      return notification.add(title, message || error.message, 'error');
   }
};

export const notifySuccess = (title, message) => notification.add(title, message, 'success');

export const sendCustomNotification = (customNotification) => (dispatch) => {
   dispatch(notification.custom(customNotification));
};
