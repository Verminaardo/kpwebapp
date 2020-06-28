import React from 'react';
import classSet from 'classnames';

const PageButton = ({ active, disable, hidden, changePage, children }) => {
   const classes = classSet({
      active: active,
      disabled: disable,
      hidden: hidden,
      'page-item': true
   });
   return (
      <li className={classes}>
         <a href="/#"
            onClick={(e) => {
               e.preventDefault();
               changePage(e.currentTarget.textContent);
            }}
            className="page-link">
            {children}
         </a>
      </li>
   );
};

export default PageButton;
