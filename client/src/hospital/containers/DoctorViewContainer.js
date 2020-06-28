import React, {Component} from 'react';
import WithBreadcrumbs from "../../common/components/breadcrumbs/WithBreadcrumbs";
import * as hospitalService from '../store/service';
import {getDoctor} from "../store/selectors";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import profile from '../../assets/img/profile.png';

class DoctorViewContainer extends Component {
   constructor(props) {
      super(props);
      this.loadDoctor = this.loadDoctor.bind(this);
      this.getSpecialityBreadcrumbs = this.getSpecialityBreadcrumbs.bind(this);
   }

   componentDidMount() {
      const {id} = this.props.match.params;

      this.loadDoctor(id);
   }

   loadDoctor(id) {
      const {requestDoctor} = this.props.hospitalService;
      requestDoctor(id ? id : "");
   }

   getSpecialityBreadcrumbs() {
      const {speciality} = this.props.match.params;
      return [
      {
         home: true,
         link: '/',
         text: 'Главная'
      },
      {
         link: '/speciality',
         text: 'Специальности'
      },
      {
         link: `/speciality/${speciality}/showDoctors/`,
         text: 'Врачи'
      },
      {
         active: true,
         text: 'Врач'
      }
   ];}

   render() {
      const {doctor} = this.props;


      return (<WithBreadcrumbs breadcrumbs={this.getSpecialityBreadcrumbs()}>
         <div className="container">
            <div className="jumbotron bg-white">
               <div className="row">

                  <div className="col-md-4 col-xs-12 col-sm-6 col-lg-2">
                     <img src={profile}
                          className="img-circle profile-img" alt="Портрет доктора"/>
                  </div>

                  <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                     <div className="container border-bottom">
                        <h3>{doctor.middleName} {doctor.firstName} {doctor.lastName}</h3>
                     </div>
                     <div className="container details">
                        <h6>Специальность: {doctor.speciality && doctor.speciality.name}</h6>
                        <h6>Категория: {doctor.category && doctor.category.name}</h6>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </WithBreadcrumbs>
   );
   }
   }

   const mapStateToProps = (state) => ({
      doctor: getDoctor(state)
   });

   const mapDispatchToProps = (dispatch) => ({
      hospitalService: bindActionCreators(hospitalService, dispatch)
   });

   export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(DoctorViewContainer);