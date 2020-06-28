import React, {Fragment} from 'react';

import TableInfo from '../table-info/TableInfo';
import SizePerPage from '../size-per-page/SizePerPage';
import PaginationList from '../pagination-list/PaginationList';
import Const from '../../constants/index';

const PaginationRow = (props) => (
   <Fragment>
   <div className="row">
      <div className="col-xs-7 pull-left ml-4">
         <TableInfo page={props.page} sizePerPage={props.sizePerPage} itemCount={props.itemCount} />
         {props.itemCount > Const.SIZE_PER_PAGE && (
            <span>
                     <SizePerPage
                        onChange={props.onChangeSizePerPage}
                        sizePerPage={props.sizePerPage}
                     />
                     <span>&nbsp;записей на странице;</span>
            </span>
         )}

      </div>
   </div>
   <div className="row">
      <div className="col-xs-5 ml-4 pt-2">
      {props.itemCount > props.sizePerPage && (
         <PaginationList
            currPage={props.page}
            sizePerPage={props.sizePerPage}
            changePage={props.onChangePage}
            pageStartIndex={props.pageStartIndex || Const.PAGE_START_INDEX}
            paginationSize={props.paginationSize || Const.PAGINATION_SIZE}
            dataSize={props.itemCount}
            prePage={props.prePage || Const.PRE_PAGE}
            nextPage={props.nextPage || Const.NEXT_PAGE}
            firstPage={props.firstPage || Const.FIRST_PAGE}
            lastPage={props.lastPage || Const.LAST_PAGE}
         />
      )}
      </div>
   </div>
   </Fragment>
);

export default PaginationRow;
