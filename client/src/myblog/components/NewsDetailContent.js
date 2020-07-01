import React, {Component, Fragment} from 'react';
import setIn from '../../utils/setIn'
import {bindActionCreators} from "redux";
import * as newsService from '../store/service';
import * as commonService from '../../common/store/service'
import {connect} from "react-redux";
import {getNewsDetails, getSendCommentSuccess} from "../store/selectors";
import {getCurrentUser, getJwt, isAuth} from "../../common/store/selectors";
import {Button} from "../../modal/buttons";
import ReactMarkdown from "react-markdown";

class NewsDetailContent extends Component {

   constructor(props) {
      super(props);
      this.state = {
         commentary: '',
      };

      this.onChangeAuthFormHandler = this.onChangeAuthFormHandler.bind(this)
      this.sendCommentary = this.sendCommentary.bind(this)
   }

   onChangeAuthFormHandler(value, field) {
      this.setState(setIn(this.state, field, value));
   }

   sendCommentary() {
      const {commentary} = this.state
      const {sendComm} = this.props.newsService;
      sendComm({Text: commentary, my_new: this.props.newsDetail.id, user: this.props.currentUser.id}, this.props.jwt);
   }

   componentWillReceiveProps(nextProps) {
      if (!this.props.sendCommentSuccess && nextProps.sendCommentSuccess) {
         this.props.needToUpdate()
      }
   }

   render() {
      const {newsDetail, isAuth} = this.props
      const {commentary} = this.state

      const commentaryList = [];
      let myComments = newsDetail.my_commentaries;

      if (myComments && myComments.length) {
         for (let i = 0; i < myComments.length; i++) {
            let item = myComments[i]
            commentaryList.push(
               <div>
                  <hr className="m-4"/>
                  <div className="comment">
                     <div className="head">
                        <small>
                           {item.user && <strong className='user'>
                              {`User id: ${item.user}`}
                           </strong>}
                           {`Дата создания: ${item.created_at}`}
                        </small>
                     </div>
                     <div>
                        <p>{item.Text}</p>
                     </div>
                  </div>
               </div>)
         }
      } else {
         commentaryList.push(
            <div className="row m-4">
               <div className="col-md-8 offset-md-2 text-center">
                  <h3>{"Комментариев нет!"}</h3>
               </div>
            </div>
         )
      }

      return (
         <Fragment>
            <div className="rounded-lg border-danger border p-3 justify-content-end align-items-end">
               <h1>{newsDetail.Header}</h1>
               {newsDetail.PreviewImage && <div className="d-flex justify-content-center m-5"> <img src={newsDetail.PreviewImage.url} alt="post img" width="1024"
                                                                                                    className="img-responsive thumb margin10 img-thumbnail"/> </div>}
               <article>
                  <p className="small text-secondary">
                     {newsDetail.Description}
                  </p>
                  <hr className="m-3"/>
                  <ReactMarkdown source={newsDetail.Content} />
               </article>
            </div>
            {commentaryList}
            <hr className="mt-2 mb-4"/>
            {isAuth &&
            <div>
               <form>
                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1">Комментарий</label>
                     <textarea
                        rows="4" cols="50"
                        className="form-control"
                        id="inputCommentary"
                        value={commentary}
                        placeholder="Введите ваш комментарий..."
                        onChange={(e) => this.onChangeAuthFormHandler && this.onChangeAuthFormHandler(e.target.value, "commentary")}
                     />
                  </div>
                  <Button
                     btnStyle="primary"
                     onClick={() => this.sendCommentary()}>
                     Отправить
                  </Button>
               </form>
            </div>
            }
         </Fragment>
      );
   }

}

const mapStateToProps = (state) => ({
   newsDetail: getNewsDetails(state),
   isAuth: isAuth(state),
   jwt: getJwt(state),
   currentUser: getCurrentUser(state),
   sendCommentSuccess: getSendCommentSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
   newsService: bindActionCreators(newsService, dispatch),
   commonService: bindActionCreators(commonService, dispatch),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(NewsDetailContent);