import PropTypes from 'prop-types';
import React from 'react';

import NavbarButtons from './NavbarButtons';
import Logo from './Logo';

const Navbar = ({logo, navbarTabs}) => (
   <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"/>
      </button>
      <Logo image={logo.image} text={logo.text}/>
      <NavbarButtons navbarTabs={navbarTabs}/>
   </nav>
);

Navbar.propTypes = {
   logo: PropTypes.shape({
      image: PropTypes.shape({
         className: PropTypes.string,
         source: PropTypes.string,
         style: PropTypes.object
      }),
      text: PropTypes.string
   }),
   navbarTabs: PropTypes.array
};

Navbar.defaultProps = {logo: {}};

export default Navbar;
