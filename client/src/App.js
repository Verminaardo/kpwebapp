import React, {Component, Fragment} from 'react';
import navListItems from './const/navbar/navListItems';

import {getCurrentUser, isAuth} from './common/store/selectors';
import * as commonService from './common/store/service';

import logoImg from './assets/img/logo.png';
import Navbar from "./common/components/header/Navbar";
import NotificationContainer from "./common/components/notifications/NotificationContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import NewsViewListContainer from "./myblog/containers/NewsViewListContainer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import NewsDetail from "./myblog/containers/NewsDetail";
import ProfileComponent from "./myblog/components/ProfileComponent";

class App extends Component {
   constructor(props, context) {
      super(props, context);
      this.setActiveItem = this.setActiveItem.bind(this);
   }

   setActiveItem(navListItem) {
      const pathname = this.props.location.pathname;
      return navListItem.map((item) => ({...item, isActive: (pathname === item.href)}));
   }

   render() {
      const logo = {
         image: {
            className: "main-logo",
            source: logoImg
         }
      };

      const {currentUser} = this.props;

      return (
         <div>
            <Navbar logo={logo} navbarTabs={this.setActiveItem(navListItems)} user={this.props.currentUser}/>
            <Switch>
               <Fragment>
                  <div className="row">
                     <div className="col-md-8 ml-5 mr-5">
                        <Route exact path="/" component={LandingPage}/>
                        <Route exact path="/news"
                               render={() => <NewsViewListContainer user={this.props.currentUser}/>}/>
                        <Route path="/news/:newsDetailId"
                               component={NewsDetail}
                        />
                     </div>
                        {this.props.isAuth &&
                        <ProfileComponent
                           id={currentUser.id}
                           username={currentUser.username}
                           email={currentUser.email}
                           my_commentaries={currentUser.my_commentaries}/>
                        }
                  </div>
               </Fragment>
            </Switch>
            <NotificationContainer/>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state),
   isAuth: isAuth(state)
});

const mapDispatchToProps = (dispatch) => ({
   commonService: bindActionCreators(commonService, dispatch)
});

export default withRouter(
   connect(
      mapStateToProps,
      mapDispatchToProps
   )(App)
);