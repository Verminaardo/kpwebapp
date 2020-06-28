import React, { Component, Fragment } from 'react';
import navListItems from './const/navbar/navListItems';

import logoImg from './assets/img/horoLogo.png';
import Navbar from "./common/components/header/Navbar";
import NotificationContainer from "./common/components/notifications/NotificationContainer";
import {Route, Switch} from "react-router-dom";
import SpecialityViewListContainer from "./hospital/containers/SpecialityViewListContainer";
import LandingPage from "./landingPage/LandingPage";
import DoctorViewListContainer from "./hospital/containers/DoctorViewListContainer";
import DoctorViewContainer from "./hospital/containers/DoctorViewContainer";

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

      return (
         <div>
            <Navbar logo={logo} navbarTabs={this.setActiveItem(navListItems)} />
            <Switch>
               <Fragment>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/doctors" render={()=><DoctorViewListContainer filterable noAction defaultView/>}/>
                  <Route exact path="/speciality" component={SpecialityViewListContainer} />
                  <Route exact path="/speciality/:speciality/showDoctors" component={DoctorViewListContainer} />
                  <Route exact path="/speciality/:speciality/showDoctors/:id/show/" component={DoctorViewContainer} />
               </Fragment>
            </Switch>
            <NotificationContainer/>
         </div>
      );
   }
}

export default App;
