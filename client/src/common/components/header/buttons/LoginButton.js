import React, {Component, Fragment} from 'react';
import LoginModal from '../../../../modal/login/LoginModal';
import update from 'immutability-helper';

class LoginButton extends Component {
   constructor(props) {
      super(props);

      this.state = {
         showModal: false
      };

      this.changeModalVisibility = this.changeModalVisibility.bind(this);
   }

   changeModalVisibility(isVisible) {
      const newState = update(this.state, {
         showModal: {$set: isVisible}
      });
      this.setState(newState);
   }

   render() {
      const {text} = this.props;
      const {showModal} = this.state;

      return (
         <Fragment>
            <button type="button" className="btn btn-outline-danger mr-5"
                    onClick={() => this.changeModalVisibility(true)}>
               {text}
            </button>
            <LoginModal
               show={showModal}
               closeModal={() => this.changeModalVisibility(false)}
            />
         </Fragment>
      );
   }
}

export default LoginButton;
