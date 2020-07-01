import {notification} from './actions';

export const notifyError = (error = {}, title, message) => {
   debugger
      return notification.add(title, message || error.message[0].messages[0].message, 'error');
};

export const notifySuccess = (title, message) => notification.add(title, message, 'success');

export const sendCustomNotification = (customNotification) => (dispatch) => {
   dispatch(notification.custom(customNotification));
};
