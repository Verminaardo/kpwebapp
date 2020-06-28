import ajax from '../../../common/utils/ajax';
import {specialityList} from './actions';
import {createLoadAsyncAction, createPageableRequestUrl} from '../../../common/utils/service-utils';

const request = ajax('/speciality');

const errorMessage = 'Произошла ошибка при загрузке списка специальностей';

export const requestSpecialityList = (pageable) =>
   createLoadAsyncAction(specialityList, request, {type: 'GET', url: createPageableRequestUrl(pageable, "/getAll")}, errorMessage);
