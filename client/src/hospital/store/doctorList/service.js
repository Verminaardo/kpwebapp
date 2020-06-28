import ajax from '../../../common/utils/ajax';
import {doctorList} from './actions';
import {createPageableRequestUrl} from '../../../common/utils/service-utils';
import {notifyError} from "../../../common/store/notifications/service";

const request = ajax('/doctors');

const errorMessage = 'Произошла ошибка при загрузке списка специальностей';

export const requestDoctorList = (pageable, doctorFilter) => (dispatch) => {
   dispatch(doctorList.load.request());
   request({
      url: createPageableRequestUrl(pageable, "/getAll"),
      type: 'POST',
      data: doctorFilter
   })
      .then((response) => {
         dispatch(doctorList.load.success(response));
      })
      .catch((error) => {
         dispatch(notifyError(error, errorMessage));
         dispatch(doctorList.load.error(error));
      });
};
