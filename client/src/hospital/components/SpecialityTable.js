import React from 'react';

import ButtonLink from "../../buttons/button-link/ButtonLink";
import PaginationRow from "../../table/elements/pagination/pagination-row/PaginationRow";
import Table from "../../table/containers/table/Table";

const SpecialityTable = (props) => {

   const columns = [
      {
         key: 'speciality',
         title: 'Наименование специальности',
         dataFormatter: (item) => item.name,
      },
      {
         key: 'code',
         title: 'Код специальности',
         dataFormatter: (item) => item.code,
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
                  tooltip="Показать врачей"
                  href={`/speciality/${item.id}/showDoctors/`}
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
         itemCount={props.specialityData ? props.specialityData.totalElements : 0}
      />
   );

   return (
      <Table
         dataList={props.specialityData ? props.specialityData.content : []}
         paginationRow={pagination}
         columns={columns}
      />
   );
};

export default SpecialityTable;
