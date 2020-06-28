import React from 'react';
import Breadcrumb from "./Breadcrumb";

const Breadcrumbs = ({ breadcrumbs}) => (
   <nav aria-label="breadcrumb">
      <ol className="breadcrumb bg-white border-bottom small">
         {breadcrumbs.map((elem, index) => <Breadcrumb key={index} elem={elem} />)}
      </ol>
   </nav>
);

export default Breadcrumbs;
