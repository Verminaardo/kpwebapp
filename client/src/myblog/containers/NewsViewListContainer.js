import { getNewsList } from '../store/selectors';

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
   }

   componentDidMount() {
      this.loadNews(this.state.pageable);
      this.loadNews();
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
      const {newsList, noAction} = this.props;
      const {page, count} = this.state.pageable;


      return (<WithBreadcrumbs breadcrumbs={this.specialityBreadcrumbs}>
            <NewsList newsList={newsList} page={page} count={count}
                      onChangePage={this.onChangePage}
                      onChangeSizePerPage={this.onChangeSizePerPage}
                      noAction={noAction}
            />
         </WithBreadcrumbs>
      );
   }
}

const mapStateToProps = (state) => ({
   newsList: getNewsList(state),
});

const mapDispatchToProps = (dispatch) => ({
   newsService: bindActionCreators(newsService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewsViewListContainer);