import React from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import uniqueId from 'lodash/uniqueId';

const ButtonLink = ({ id, href, className, tooltip, icon, text }) => {
   const toolTipId = uniqueId();
   return (
      <Link id={id} to={href} className={classNames('decoration-none', className)}>
         <i data-tip={tooltip} data-for={toolTipId} className={icon} /> {text}
         {tooltip && (
            <ReactTooltip id={toolTipId} effect="solid" place="top" className="ace-tooltip" />
         )}
      </Link>
   );
};

export default ButtonLink;
