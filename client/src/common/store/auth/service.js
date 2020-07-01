import { auth } from './actions';
import ajax from '../../../common/utils/ajax';
import {notifyError} from '../notifications/service';

const request = ajax('/auth/local');

export const getSession = (credential) => (dispatch) => {
   dispatch(auth.request());

   request({
      type: 'POST',
      data: credential
   })
      .then((response) => dispatch(auth.success(response)))
      .catch((fail) => {
         dispatch(notifyError(fail, 'Произошла ошибка авторизации'));
         dispatch(auth.error(fail))
      });
};
