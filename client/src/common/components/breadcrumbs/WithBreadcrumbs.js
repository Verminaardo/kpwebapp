import React, {Fragment} from 'react';
import Breadcrumbs from "./Breadcrumbs";

const WithBreadcrumbs = ({breadcrumbs, children}) => (
   <Fragment>
         <Breadcrumbs breadcrumbs={breadcrumbs} />
                  {children}
   </Fragment>
);
export default WithBreadcrumbs;
