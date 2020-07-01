import React from 'react';
import PaginationRow from "../../table/elements/pagination/pagination-row/PaginationRow";
import NewsListWithPagination from "../../news/NewsListWithPagination";

const NewsList = (props) => {

   const pagination = (
      <PaginationRow
         page={props.page}
         onChangePage={props.onChangePage}
         onChangeSizePerPage={props.onChangeSizePerPage}
         sizePerPage={props.count}
         itemCount={props.newsListCount ? props.newsListCount : 0}
      />
   );

   return (
      <NewsListWithPagination
         dataList={props.newsList ? props.newsList : []}
         paginationRow={pagination}
         emptyText="Новостей нет!"
      />
   );
};

export default NewsList;
