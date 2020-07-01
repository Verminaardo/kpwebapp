import {getNewsList, getNewsListCount} from '../store/selectors';

import React, { Component } from 'react';
import WithBreadcrumbs from "../../common/components/breadcrumbs/WithBreadcrumbs";
import {bindActionCreators} from "redux";
import * as newsService from '../store/service';
import {connect} from "react-redux";
import update from 'immutability-helper';
import NewsList from "../components/NewsList";

class NewsViewListContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         pageable: {
            page: 1,
            count: 10
         }
      };

      this.onChangePage = this.onChangePage.bind(this);
      this.onChangeSizePerPage = this.onChangeSizePerPage.bind(this);
      this.loadNews = this.loadNews.bind(this);
      this.loadNewsCount = this.loadNewsCount.bind(this)
   }

   componentDidMount() {
      this.loadNews(this.state.pageable);
      this.loadNewsCount()
   }

   loadNewsCount() {
      const { requestNewsListCount } = this.props.newsService;
      requestNewsListCount();
   }

   loadNews(pageable) {
      const { requestNewsList } = this.props.newsService;
      requestNewsList(pageable);
   }

   onChangePage(page) {
      const oldPage = this.state.pageable.page;
      if (oldPage === page) {
         return;
      }
      const newState = update(this.state, {
         pageable: {
            page: { $set: page }
         }
      });
      this.setState(newState);
      this.loadNews(newState.pageable);
   }

   onChangeSizePerPage(sizePerPage) {
      const oldSizePerPage = this.state.pageable.count;
      if (oldSizePerPage === sizePerPage) {
         return;
      }

      const newState = update(this.state, {
         pageable: {
            page: { $set: 1 },
            count: { $set: sizePerPage }
         }
      });
      this.setState(newState);
      this.loadNews(newState.pageable);
   }

   specialityBreadcrumbs = [
      {
         home: true,
         link: '/',
         text: 'Главная'
      },
      {
         active: true,
         text: 'Новости'
      }
   ];

   render() {
      const {newsList, noAction, newsListCount} = this.props;
      const {page, count} = this.state.pageable;
      debugger

      return (<WithBreadcrumbs breadcrumbs={this.specialityBreadcrumbs}>
         <table className="col-md-8 m-5 center-block">
            <NewsList newsList={newsList} page={page} count={count}
                      onChangePage={this.onChangePage}
                      onChangeSizePerPage={this.onChangeSizePerPage}
                      noAction={noAction}
                      newsListCount={newsListCount}
            />
         </table>

         </WithBreadcrumbs>
      );
   }
}

const mapStateToProps = (state) => ({
   newsList: getNewsList(state),
   newsListCount: getNewsListCount(state)
});

const mapDispatchToProps = (dispatch) => ({
   newsService: bindActionCreators(newsService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewsViewListContainer);