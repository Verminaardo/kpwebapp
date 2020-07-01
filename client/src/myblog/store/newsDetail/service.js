import ajax from '../../../common/utils/ajax';
import {newsDetail} from './actions';
import {createLoadAsyncAction} from '../../../common/utils/service-utils';

const request = ajax('/my-news');

const errorMessage = 'Произошла ошибка при загрузке';

export const requestNewsDetail = (id) =>
   createLoadAsyncAction(newsDetail, request, {type: 'GET', url: `/${id}`}, errorMessage);
