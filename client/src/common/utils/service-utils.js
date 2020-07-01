import {notifyError} from '../store/notifications/service';
import {defaultGetRequestParams} from './constants';

export const createLoadAsyncAction = (
   actions,
   request,
   requestParams = defaultGetRequestParams,
   errorMessage
) => (dispatch) => {
   dispatch(actions.load.request());

   request(requestParams)
      .then((response) => dispatch(actions.load.success(response)))
      .catch((error) => {
         if (errorMessage) {
            dispatch(notifyError(error, errorMessage));
         }

         dispatch(actions.load.error(error));
      });
};

export const createPageableRequestUrl = (pageable = {}, url = '') => {
   if (!pageable.page) {
      return url;
   }

   if (pageable.page !== 1) {
      url += `?_start=${(pageable.page-1)*pageable.count}`;
      if (pageable.count) {
         url += `&_limit=${pageable.count}`;
      }
   } else if (pageable.count) {
      url += `?_limit=${pageable.count}`;
   }

   if (pageable.filter) {
      for (const key in pageable.filter) {
         if (pageable.filter[key]) {
            url += `&filter[${key}]=${pageable.filter[key]}`;
         }
      }
   }
   if (pageable.sorting) {
      url += `&sorting=${pageable.sorting}`;
   }

   return url;
};

export const createPageableRequestParams = (pageable, url) => ({
   type: 'GET',
   url: createPageableRequestUrl(pageable, url)
});
