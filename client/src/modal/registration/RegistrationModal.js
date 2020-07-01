import {isRegistrationSuccess} from '../../common/store/selectors';

import React, {Component} from 'react';
import {Button} from '../buttons';
import Modal from '../../modal';
import setIn from '../../utils/setIn'
import {bindActionCreators} from "redux";
import * as commonService from '../../common/store/service';
import {connect} from "react-redux";

class RegistrationModal extends Component {

   constructor(props) {
      super(props);
      this.state = {
         username: '',
         password: '',
         email: ''
      };

      this.onChangeRegistrationFormHandler = this.onChangeRegistrationFormHandler.bind(this)
      this.registration = this.registration.bind(this)
   }

   onChangeRegistrationFormHandler(value, field) {
      this.setState(setIn(this.state, field, value));
   }

   registration() {
      const {login, password, email} = this.state
      const { registr } = this.props.commonService;
      registr({username: login, email: email, password: password});
   }

   componentWillReceiveProps(nextProps) {
      if (!this.props.isRegistrationSuccess && nextProps.isRegistrationSuccess) {
         this.props.closeModal()
      }
   }

   render() {
      const {closeModal, size = 'sm'} = this.props
      const {login, email, password} = this.state

      return (
         <Modal {...this.props} size={size} onClose={closeModal} disableOverlayClick={true}>
            <Modal.Header>
               <Modal.Title>
                  Зарегистрируйтесь на сайте
               </Modal.Title>
            </Modal.Header>
            <Modal.Body padding>
               <form>
                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1">Логин</label>
                     <input type="text"
                            className="form-control"
                            id="inputLogin"
                            value={login}
                            placeholder="Введите логин..."
                            required
                            onChange={(e) => this.onChangeRegistrationFormHandler && this.onChangeRegistrationFormHandler(e.target.value, "login")}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="exampleInputEmail1">E-mail адресс</label>
                     <input type="email"
                            className="form-control"
                            id="inputEmail"
                            value={email}
                            placeholder="Введите адресс эл. почты..."
                            required
                            onChange={(e) => this.onChangeRegistrationFormHandler && this.onChangeRegistrationFormHandler(e.target.value, "email")}
                     />
                  </div>
                  <div className="form-group">
                     <label htmlFor="exampleInputPassword1">Пароль</label>
                     <input type="password"
                            className="form-control"
                            id="inputPassword"
                            value={password}
                            placeholder="Введите пароль..."
                            required
                            onChange={(e) => this.onChangeRegistrationFormHandler && this.onChangeRegistrationFormHandler(e.target.value, "password")}
                     />
                  </div>
               </form>
            </Modal.Body>
            <Modal.Footer>
               <Button
                  btnStyle="primary"
                  onClick={() => this.registration()}>
                  Зарегистрироваться
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
   isRegistrationSuccess: isRegistrationSuccess(state)
});

const mapDispatchToProps = (dispatch) => ({
   commonService: bindActionCreators(commonService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(RegistrationModal);