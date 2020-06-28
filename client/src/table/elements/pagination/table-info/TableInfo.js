import React from 'react';

const TableInfo = ({ page, sizePerPage, itemCount }) => {
   const getFirstResultIndex = () => {
      const currentPage = (page - 1) * sizePerPage + 1;
      if (page === 1) {
         return page;
      } else if (currentPage < itemCount) {
         return currentPage;
      }
      return itemCount;
   };

   const firstIndex = getFirstResultIndex();
   let to = Math.min(page * sizePerPage - 1, itemCount);
   if (to >= itemCount) to--;
   return (
      <span className="padding-top-6">
         Записи с <strong>{firstIndex}</strong> по <strong>{to + 1}</strong>
         &nbsp;из <strong>{itemCount}</strong>
         &nbsp;записей;&nbsp;&nbsp;&nbsp;
      </span>
   );
};

export default TableInfo;
