import React, {Component} from 'react';
import setIn from '../../utils/setIn'
import {bindActionCreators} from "redux";
import * as newsService from '../store/service';
import {connect} from "react-redux";
import {getNewsDetails} from "../store/selectors";

class NewsDetailContent extends Component {

   constructor(props) {
      super(props);
      this.state = {
         commentary: '',
      };

      this.onChangeAuthFormHandler = this.onChangeAuthFormHandler.bind(this)
      this.sendCommentary = this.sendCommentary.bind(this)
      this.loadCommentaries = this.loadCommentaries.bind(this)
   }

   onChangeAuthFormHandler(value, field) {
      this.setState(setIn(this.state, field, value));
   }

   sendCommentary() {
      const {login, password} = this.state
      const {getSession} = this.props.authService;
      getSession({identifier: login, password: password});
   }

   loadCommentaries() {

   }

   componentWillReceiveProps(nextProps) {
      if (typeof nextProps.currentUser !== "undefined" && nextProps.currentUser != null && this.props.show && nextProps.show) {
         this.props.closeModal()
      }
   }

   render() {
      const {newsDetail} = this.props

      return (
         <div className="rounded-lg border-danger border p-3 justify-content-end align-items-end">
            <h1>{newsDetail.Header}</h1>
            {newsDetail.PreviewImage && <img src={newsDetail.PreviewImage} alt="post img"
                                             className="pull-left img-responsive thumb margin10 img-thumbnail"/>}
            <article>
               <p className="small text-secondary">
                  {newsDetail.Description}
               </p>
               <hr className="m-3"/>
               <p>
                  {newsDetail.Content}
               </p>
            </article>
         </div>
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
)(NewsDetailContent);