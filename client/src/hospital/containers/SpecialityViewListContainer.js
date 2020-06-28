import {
   getSpecialityList
} from '../store/selectors';

import React, { Component } from 'react';
import WithBreadcrumbs from "../../common/components/breadcrumbs/WithBreadcrumbs";
import {bindActionCreators} from "redux";
import * as hospitalService from '../store/service';
import {connect} from "react-redux";
import SpecialityTable from "../components/SpecialityTable";
import update from 'immutability-helper';


class SpecialityViewListContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         pageable: {
            page: 1,
            count: 10
         }
      };

      this.onChangePage = this.onChangePage.bind(this);
      this.onChangeSizePerPage = this.onChangeSizePerPage.bind(this);
      this.loadSpeciality = this.loadSpeciality.bind(this);
   }

   componentDidMount() {
      this.loadSpeciality(this.state.pageable);
   }

   loadSpeciality(pageable) {
      const { requestSpecialityList } = this.props.hospitalService;
      requestSpecialityList(pageable);
   }

   onChangePage(page) {
      const oldPage = this.state.pageable.page;
      if (oldPage === page) {
         return;
      }
      const newState = update(this.state, {
         pageable: {
            page: { $set: page }
         }
      });
      this.setState(newState);
      this.loadSpeciality(newState.pageable);
   }

   onChangeSizePerPage(sizePerPage) {
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
      this.loadSpeciality(newState.pageable);
   }

   breadcrumbs = [
      {
         home: true,
         link: '/',
         text: 'Главная'
      },
      {
         active: true,
         text: 'Специальности'
      }
   ];

   render() {
      const {specialityList} = this.props;
      const {page, count} = this.state.pageable;


      return (<WithBreadcrumbs breadcrumbs={this.breadcrumbs}>
               <SpecialityTable
                  specialityData={specialityList}
                  page={page}
                  count={count}
                  onChangePage={this.onChangePage}
                  onChangeSizePerPage={this.onChangeSizePerPage}/>
            </WithBreadcrumbs>
      );
   }
}

const mapStateToProps = (state) => ({
   specialityList: getSpecialityList(state)
});

const mapDispatchToProps = (dispatch) => ({
   hospitalService: bindActionCreators(hospitalService, dispatch)
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SpecialityViewListContainer);