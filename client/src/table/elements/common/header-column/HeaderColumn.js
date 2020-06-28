import React from 'react';

const HeaderColumn = ({width, title, className}) =>
         <th
            style={{ width: width, minWidth: width, maxWidth: width }}
            className={className || 'header text-align-center'}>
            <span>
               {title}
               &nbsp;
            </span>
         </th>;

   export default HeaderColumn;
