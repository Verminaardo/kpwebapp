import { sendCommentary } from './actions';
import ajax from '../../../common/utils/ajax';
import {notifyError, notifySuccess} from '../../../common/store/service';

const request = ajax('/my-commentaries');

export const sendComm = (content, jwt) => (dispatch) => {
   dispatch(sendCommentary.request());

   request({
      type: 'POST',
      data: content,
      headers: {
         Authorization: `Bearer ${jwt}`
      }
   })
      .then((response) => {
         dispatch(notifySuccess('Комментарий оставлен успешно!'));
         dispatch(sendCommentary.success(response))
      })
      .catch((fail) => {
         dispatch(notifyError(fail, 'Произошла ошибка'));
         dispatch(sendCommentary.error(fail))
      });
};
