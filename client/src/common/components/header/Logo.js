import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'react-router-dom';

const Logo = ({image, text}) => (
   <div className="navbar-header pull-left">
      <Link to={'/'} className="navbar-brand">
            <img className={image.className} src={image.source} alt=""/>
            &nbsp; {text}
      </Link>
   </div>
);

Logo.propTypes = {
   image: PropTypes.shape({
      className: PropTypes.string,
      source: PropTypes.string,
      style: PropTypes.object
   }),
   text: PropTypes.string
};

export default Logo;
