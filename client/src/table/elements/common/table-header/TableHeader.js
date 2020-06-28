import React from 'react';
import uniqueId from 'lodash/uniqueId';

import HeaderColumn from '../header-column/HeaderColumn';
import FilterCell from '../../filter/cell/FilterCell';

const TableHeader = ({ columns, filterableTable }) => {
   const headerColumns = [];
   const filterColumns = [];
   for (let i = 0; i < columns.length; i++) {
      const key = columns[i].key || uniqueId();
      headerColumns.push(
         <HeaderColumn
            key={key}
            id={key}
            width={columns[i].width}
            title={columns[i].title}
         />
      );
   }

   if (filterableTable) {
      for (let i = 0; i < columns.length; i++) {
         filterColumns.push(
            <FilterCell key={columns[i].key || uniqueId()} filter={columns[i].filter} />
         );
      }
   }

   return (
      <thead>
         <tr>{headerColumns}</tr>
         {filterableTable && <tr className="filters">{filterColumns}</tr>}
      </thead>
   );
};

export default TableHeader;
