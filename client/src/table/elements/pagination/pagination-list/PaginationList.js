import React, { Component } from 'react';
import PageButton from '../page-button/PageButton';
import Const from '../../constants/index';

class PaginationList extends Component {
   constructor(props, context) {
      super(props, context);
      this.changePage = this.changePage.bind(this);
      this.makePage = this.makePage.bind(this);
      this.getPages = this.getPages.bind(this);
   }

   changePage(page) {
      const {
         pageStartIndex,
         prePage,
         currPage,
         nextPage,
         lastPage,
         firstPage,
         sizePerPage,
         changePage
      } = this.props;

      if (page === prePage) {
         page = currPage - 1 < pageStartIndex ? pageStartIndex : currPage - 1;
      } else if (page === nextPage) {
         page = currPage + 1 > this.lastPage ? this.lastPage : currPage + 1;
      } else if (page === lastPage) {
         page = this.lastPage;
      } else if (page === firstPage) {
         page = pageStartIndex;
      } else {
         page = parseInt(page, 10);
      }
      if (page !== currPage) {
         changePage(page, sizePerPage);
      }
   }

   render() {
      const { dataSize, sizePerPage, pageStartIndex } = this.props;

      this.totalPages = Math.ceil(dataSize / sizePerPage);
      this.lastPage = pageStartIndex + this.totalPages - 1;
      const pageBtns = this.makePage();

      const pageListStyle = {
         // override the margin-top defined in .pagination class in bootstrap.
         margin: '0'
      };

      return (
         <ul className="pagination padding-top-6" style={pageListStyle}>
            {pageBtns}
         </ul>
      );
   }

   makePage() {
      const pages = this.getPages();
      const { currPage, pageStartIndex, firstPage, prePage, nextPage, lastPage } = this.props;
      return pages.map(function(page, index) {
         const isActive = page === currPage;
         let disabled = false;
         let hidden = false;
         if (currPage === pageStartIndex && (page === firstPage || page === prePage)) {
            disabled = true;
            hidden = true;
         }
         if (currPage === this.lastPage && (page === nextPage || page === lastPage)) {
            disabled = true;
            hidden = true;
         }
         if (page === Const.DELIMITER_PAGINATION) {
            disabled = true;
            hidden = false;
         }
         return (
            <PageButton
               key={index}
               changePage={this.changePage}
               active={isActive}
               disable={disabled}
               hidden={hidden}>
               {page}
            </PageButton>
         );
      }, this);
   }

   getPages() {
      let pages;
      let endPage = this.totalPages;
      const { currPage, paginationSize, pageStartIndex, prePage, nextPage } = this.props;
      if (endPage <= 0) return [];
      let startPage = Math.max(currPage - Math.floor(paginationSize / 2), pageStartIndex);
      endPage = startPage + paginationSize - 1;

      if (endPage > this.lastPage) {
         endPage = this.lastPage;
         startPage = endPage - paginationSize + 1;
      }

      if (startPage !== pageStartIndex && this.totalPages > paginationSize) {
         pages = [prePage, pageStartIndex, Const.DELIMITER_PAGINATION];
      } else if (this.totalPages > 1) {
         pages = [prePage];
      } else {
         pages = [];
      }

      for (let i = startPage; i <= endPage; i++) {
         if (i >= pageStartIndex) pages.push(i);
      }

      if (endPage < this.lastPage) {
         pages.push(Const.DELIMITER_PAGINATION);
         pages.push(this.lastPage);
         pages.push(nextPage);
      } else if (endPage === this.lastPage && currPage !== this.lastPage) {
         pages.push(nextPage);
      }

      return pages;
   }
}

export default PaginationList;
