import React, { Component, Fragment } from 'react';
import navListItems from './const/navbar/navListItems';

import { getCurrentUser } from './common/store/selectors';
import * as commonService from './common/store/service';

import logoImg from './assets/img/logo.png';
import Navbar from "./common/components/header/Navbar";
import NotificationContainer from "./common/components/notifications/NotificationContainer";
import {Route, Switch, withRouter} from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import NewsViewListContainer from "./myblog/containers/NewsViewListContainer";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

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
      debugger
      return (
         <div>
            <Navbar logo={logo} navbarTabs={this.setActiveItem(navListItems)} user={this.props.currentUser} />
            <Switch>
               <Fragment>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/news" render={()=><NewsViewListContainer user={this.props.currentUser} noAction/>}/>
               </Fragment>
            </Switch>
            <NotificationContainer/>
         </div>
      );
   }
}

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state)
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