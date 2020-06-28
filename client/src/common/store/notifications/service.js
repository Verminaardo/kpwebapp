import {notification} from './actions';

export const notifyError = (error = {}, title, message) => {
      return notification.add(title, message || error.message, 'error');
};

export const notifySuccess = (title, message) => notification.add(title, message, 'success');

export const sendCustomNotification = (customNotification) => (dispatch) => {
   dispatch(notification.custom(customNotification));
};
