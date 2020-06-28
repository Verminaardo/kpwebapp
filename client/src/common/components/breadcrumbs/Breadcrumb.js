import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import uniqueId from 'lodash/uniqueId';

const Breadcrumb = ({ elem: { active, text, link } }) => (
   <li key={uniqueId()} className={classNames("breadcrumb-item", active ? 'active' : '')}>
      {link && !active ? <Link to={link}> {text} </Link> : <span> {text} </span>}
   </li>
);

export default Breadcrumb;
