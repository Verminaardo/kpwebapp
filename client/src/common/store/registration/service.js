import { registration } from './actions';
import ajax from '../../../common/utils/ajax';
import {notifyError, notifySuccess} from '../notifications/service';

const request = ajax('/auth/local/register');

export const registr = (credential) => (dispatch) => {
   dispatch(registration.request());

   request({
      type: 'POST',
      data: credential
   })
      .then((response) => {
         dispatch(notifySuccess('Регистрация прошла успешно!'));
         dispatch(registration.success(response))
      })
      .catch((fail) => {
         dispatch(notifyError(fail, 'Произошла ошибка регистрации'));
         dispatch(registration.error(fail))
      });
};
