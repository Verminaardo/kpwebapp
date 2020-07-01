import React, {Component} from 'react';
import {persistor} from '../../../../index.js'

class LogoutButton extends Component {
   constructor(props) {
      super(props);

      this.logout = this.logout.bind(this);
   }

   logout() {
      persistor.purge().then(r => window.location.reload(false))
   }

   render() {
      return (
            <button type="button" className="btn btn-outline-info ml-5 mr-5"
                    onClick={() => this.logout()}>
               Выйти
            </button>
      );
   }
}

export default LogoutButton;
