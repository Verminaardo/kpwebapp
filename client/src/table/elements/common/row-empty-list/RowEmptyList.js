import React from 'react';

const RowEmptyList = ({ columnsLength, text }) => (
   <tr>
      <td colSpan={columnsLength}>{text || 'Нет записей'}</td>
   </tr>
);
export default RowEmptyList;
