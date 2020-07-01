import { getCurrentUser } from '../../common/store/selectors';

import React, {Component} from 'react';
import {Button} from '../buttons';
import Modal from '../../modal';
import setIn from '../../utils/setIn'
import {bindActionCreators} from "redux";
import * as authService from '../../common/store/service';
import {connect} from "react-redux";

class LoginModal extends Component {

   constructor(props) {
      super(props);
      this.state = {
         login: '',
         password: ''
      };

      this.onChangeAuthFormHandler = this.onChangeAuthFormHandler.bind(this)
      this.auth = this.auth.bind(this)
   }

   onChangeAuthFormHandler(value, field) {
      this.setState(setIn(this.state, field, value));
   }

   auth() {
      const {login, password} = this.state
      const { getSession } = this.props.authService;
      getSession({identifier: login, password: password});
   }

   componentWillReceiveProps(nextProps) {
      if (typeof nextProps.currentUser !== "undefined" && nextProps.currentUser != null && this.props.show && nextProps.show) {
         this.props.closeModal()
      }
   }

   render() {
      const {closeModal, size = 'sm'} = this.props
      const {login, password} = this.state

      return (
         <Modal {...this.props} size={size} onClose={closeModal} disableOverlayClick={true}>
            <Modal.Header>
               <Modal.Title>
                  Авторизуйтесь на сайте
               </Modal.Title>
            </Modal.Header>
            <Modal.Body padding>
               <form>
                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1">Логин/E-mail адресс</label>
                     <input type="text"
                            className="form-control"
                            id="inputLogin"
                            value={login}
                            placeholder="Введите адресс эл. почты..."
                            onChange={(e) => this.onChangeAuthFormHandler && this.onChangeAuthFormHandler(e.target.value, "login")}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="exampleInputPassword1">Пароль</label>
                     <input type="password"
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            placeholder="Введите пароль..."
                            onChange={(e) => this.onChangeAuthFormHandler && this.onChangeAuthFormHandler(e.target.value, "password")}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button
                  btnStyle="primary"
                  onClick={() => this.auth()}>
                  Логин
               </Button>
               <Button
                  btnStyle="default"
                  onClick={() => closeModal}
               >
                  Отмена
               </Button>
            </Modal.Footer>
         </Modal>
      );
   }

}

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state)
});

const mapDispatchToProps = (dispatch) => ({
   authService: bindActionCreators(authService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(LoginModal);