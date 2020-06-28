import {
   getDoctorList, getSpecialityList
} from '../store/selectors';

import React, { Component } from 'react';
import WithBreadcrumbs from "../../common/components/breadcrumbs/WithBreadcrumbs";
import {bindActionCreators} from "redux";
import * as hospitalService from '../store/service';
import {connect} from "react-redux";
import update from 'immutability-helper';
import DoctorTable from "../components/DoctorTable";

class DoctorContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         filter: {
            lastName: '',
            firstName: '',
            middleName: '',
            speciality: {
               id: ''
            }
         },
         pageable: {
            page: 1,
            count: 10
         }
      };

      this.onChangePage = this.onChangePage.bind(this);
      this.onChangeSizePerPage = this.onChangeSizePerPage.bind(this);
      this.loadDoctors = this.loadDoctors.bind(this);
      this.loadSpeciality = this.loadSpeciality.bind(this);
      this.onChangeFilterHandler = this.onChangeFilterHandler.bind(this);
   }

   componentDidMount() {
      this.loadDoctors(this.state.pageable);
      this.loadSpeciality();
   }

   loadDoctors(pageable, filter) {
      const speciality = this.props.match && this.props.match.params && this.props.match.params.speciality;
      const { requestDoctorList } = this.props.hospitalService;
      requestDoctorList(pageable, speciality ? {speciality: {id: speciality}} : filter || {});
   }

   loadSpeciality() {
      const { requestSpecialityList } = this.props.hospitalService;
      requestSpecialityList();
   }

   onChangePage(page) {
      const oldPage = this.state.pageable.page;
      const {filter} = this.state;
      if (oldPage === page) {
         return;
      }
      const newState = update(this.state, {
         pageable: {
            page: { $set: page }
         }
      });
      this.setState(newState);
      this.loadDoctors(newState.pageable, filter);
   }

   onChangeSizePerPage(sizePerPage) {
      const {filter} = this.state;
      const oldSizePerPage = this.state.pageable.count;
      if (oldSizePerPage === sizePerPage) {
         return;
      }

      const newState = update(this.state, {
         pageable: {
            page: { $set: 1 },
            count: { $set: sizePerPage }
         }
      });
      this.setState(newState);
      this.loadDoctors(newState.pageable,filter);
   }

   onChangeFilterHandler(filterName) {
      debugger;
      return (value) => {
         if (filterName === "speciality")
         {
            const oldValue = this.state.filter.speciality.id;
            if (oldValue === value) {
               return;
            }
            const newState = update(this.state, {
               pageable: {
                  page: { $set: 1 }
               },
               filter: {
                  $merge: {speciality: {
                     id: value
                  }}
               }
            });
            this.setState(newState);
            this.loadDoctors(newState.pageable, newState.filter);
            return;
         }

         const oldValue = this.state.filter[filterName];
         if (oldValue === value) {
            return;
         }
         const newState = update(this.state, {
            pageable: {
               page: { $set: 1 }
            },
            filter: {
               $merge: value
            }
         });
         this.setState(newState);
         this.loadDoctors(newState.pageable, newState.filter);
      };
   }

   specialityBreadcrumbs = [
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
         active: true,
         text: 'Врачи'
      }
   ];

   defaultBreadcrumbs = [
      {
         home: true,
         link: '/',
         text: 'Главная'
      },
      {
         active: true,
         text: 'Врачи'
      }
   ];

   render() {
      const {filter} = this.state;
      const {doctorList, filterable, noAction, specialityList, defaultView} = this.props;
      const {page, count} = this.state.pageable;


      return (<WithBreadcrumbs breadcrumbs={defaultView ? this.defaultBreadcrumbs : this.specialityBreadcrumbs}>
            <DoctorTable doctorsList={doctorList} page={page} count={count}
                         onChangePage={this.onChangePage}
                         onChangeSizePerPage={this.onChangeSizePerPage}
                         onChangeFilter={this.onChangeFilterHandler}
                         filterValues={filter}
                         filterable={filterable}
                         noAction={noAction}
                         specialityList={specialityList.content}
            />
         </WithBreadcrumbs>
      );
   }
}

const mapStateToProps = (state) => ({
   doctorList: getDoctorList(state),
   specialityList: getSpecialityList(state)
});

const mapDispatchToProps = (dispatch) => ({
   hospitalService: bindActionCreators(hospitalService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(DoctorContainer);