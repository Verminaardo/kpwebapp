import React from 'react';
import PaginationRow from "../../table/elements/pagination/pagination-row/PaginationRow";
import OneNews from "../../news/OneNews";

const NewsList = (props) => {

   const pagination = (
      <PaginationRow
         page={props.page}
         onChangePage={props.onChangePage}
         onChangeSizePerPage={props.onChangeSizePerPage}
         sizePerPage={props.count}
         itemCount={props.newsList ? props.newsList.totalElements : 0}
      />
   );

   return (
      <OneNews
         dataList={props.newsList ? props.newsList.content : []}
         paginationRow={pagination}
         emptyText="Новостей нет!"
      />
   );
};

export default NewsList;
