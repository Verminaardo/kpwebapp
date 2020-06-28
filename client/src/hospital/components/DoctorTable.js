import React from 'react';

import ButtonLink from "../../buttons/button-link/ButtonLink";
import PaginationRow from "../../table/elements/pagination/pagination-row/PaginationRow";
import Table from "../../table/containers/table/Table";
import InputTableFilter from "../../table/elements/filter/input/InputTableFilter";
import SelectTableFilter from "../../table/elements/filter/select/SelectTableFilter";

const DoctorTable = (props) => {

   const columns = [
      {
         key: 'middleName',
         title: 'Фамилия',
         dataFormatter: (item) => item.middleName,
         filter: (
            <InputTableFilter
               name="middleName"
               placeholder="Введите фамилию..."
               onChange={props.onChangeFilter('middleName')}
               value={props.filterValues.middleName}
            />
         )
      },
      {
         key: 'firstName',
         title: 'Имя',
         dataFormatter: (item) => item.firstName,
         filter: (
            <InputTableFilter
               name="firstName"
               placeholder="Введите имя..."
               onChange={props.onChangeFilter('firstName')}
               value={props.filterValues.firstName}
            />
         )
      },
      {
         key: 'lastName',
         title: 'Отчество',
         dataFormatter: (item) => item.lastName,
         filter: (
            <InputTableFilter
               name="lastName"
               placeholder="Введите отчество..."
               onChange={props.onChangeFilter('lastName')}
               value={props.filterValues.lastName}
            />
         )
      },
      {
         key: 'Специальность',
         title: 'Специальность',
         dataFormatter: (item) => item.speciality.name,
         filter: (
            <SelectTableFilter
               placeholder="Выберите специальность"
               onChange={props.onChangeFilter('speciality')}
               optionList={props.specialityList || []}
               value={props.filterValues.speciality}
            />
         )
      },
      {
         key: 'actions',
         width: '24px',
         className: 'actions',
         dataFormatter: (item) => (
            <span>
               <ButtonLink
                  className="btn btn-primary btn-sm"
                  text=">>"
                  tooltip="Подробнее..."
                  icon="fa fa-pencil fa-lg"
                  href={`/speciality/${item.speciality.id}/showDoctors/${item.id}/show/`}
               />
            </span>
         )
      }
   ];

   const pagination = (
      <PaginationRow
         page={props.page}
         onChangePage={props.onChangePage}
         onChangeSizePerPage={props.onChangeSizePerPage}
         sizePerPage={props.count}
         itemCount={props.doctorsList ? props.doctorsList.totalElements : 0}
      />
   );

   const withoutAction = (columns) => {
      props.noAction && columns.pop();
      return columns;
   };

   return (
      <Table
         dataList={props.doctorsList ? props.doctorsList.content : []}
         paginationRow={pagination}
         columns={withoutAction(columns)}
         filterableTable={props.filterable}
      />
   );
};

export default DoctorTable;
