import React from 'react';
import uniqueId from 'lodash/uniqueId';

import TableRow from '../row/TableRow';
import RowEmptyList from '../row-empty-list/RowEmptyList';

const TableBody = (props) => {
   const rows = [];
   const {
      dataList,
      columns,
      paginationRow,
      emptyText,
      selectOptions,
      getRowClassName
   } = props;
   if (dataList && dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
         rows.push(
            <TableRow
               key={dataList[i].id || uniqueId()}
               columns={columns}
               getRowClassName={getRowClassName}
               selectOptions={selectOptions}
               item={dataList[i]}
            />
         );
      }
      return (
         <tbody>
            {rows}
            {paginationRow && (
               <tr key="pagination" className="bg-white">
                  <td>{paginationRow}</td>
               </tr>
            )}
         </tbody>
      );
   } else {
      return (
         <tbody>
            <RowEmptyList columnsLength={columns.length} text={emptyText} />
         </tbody>
      );
   }
};

export default TableBody;
