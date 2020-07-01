import {getNewsDetails} from '../store/selectors';

import React, {Component} from 'react';
import WithBreadcrumbs from "../../common/components/breadcrumbs/WithBreadcrumbs";
import {bindActionCreators} from "redux";
import * as newsService from '../store/service';
import {connect} from "react-redux";
import NewsDetailContent from "../components/NewsDetailContent";

class NewsDetail extends Component {
   constructor(props) {
      super(props);

      this.loadNews = this.loadNews.bind(this);
   }

   componentDidMount() {
      this.loadNews(this.props.match.params.newsDetailId);
   }

   loadNews(id) {
      const {requestNewsDetail} = this.props.newsService;
      requestNewsDetail(id);
   }

   specialityBreadcrumbs = [
      {
         home: true,
         link: '/',
         text: 'Главная'
      },
      {
         home: false,
         link: '/news',
         text: 'Новости'
      },
      {
         active: true,
         text: 'Детальный просмотр'
      }
   ];

   render() {
      const {newsDetail} = this.props;

      return (<WithBreadcrumbs breadcrumbs={this.specialityBreadcrumbs}>
            <table className="col-md-10 m-5 center-block">
               <NewsDetailContent
                  newsDetail={newsDetail}
                  needToUpdate={() => this.loadNews(this.props.match.params.newsDetailId)}
               />
            </table>
         </WithBreadcrumbs>
      );
   }
}

const mapStateToProps = (state) => ({
   newsDetail: getNewsDetails(state),
});

const mapDispatchToProps = (dispatch) => ({
   newsService: bindActionCreators(newsService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewsDetail);