import ajax from '../../../common/utils/ajax';
import {doctor} from './actions';
import {createLoadAsyncAction} from '../../../common/utils/service-utils';

const request = ajax('/doctors');

const errorMessage = 'Произошла ошибка при загрузке';

export const requestDoctor = (id) =>
   createLoadAsyncAction(doctor, request, {type: 'GET', url: `/${id}/get`}, errorMessage);
