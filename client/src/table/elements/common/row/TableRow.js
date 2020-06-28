import React from 'react';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';

import TableCell from '../cell/TableCell';

const TableRow = ({ columns, item, getRowClassName }) => {
   const cells = [];
   for (let i = 0; i < columns.length; i++) {
      cells.push(
         <TableCell
            key={columns[i].key || uniqueId()}
            className={
               columns[i].getClassName ? columns[i].getClassName(item) : columns[i].className
            }
            data={columns[i].dataFormatter && columns[i].dataFormatter(item)}
         />
      );
   }
   return (
      <tr
         className={classNames(getRowClassName && getRowClassName(item))}>
         {cells}
      </tr>
   );
};

export default TableRow;
