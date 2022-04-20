import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/Media/logo.0cbf9e63b4a021661126.gif';
import shareIcon from '../../assets/icon/share.svg';
import fullScreenIcon from '../../assets/icon/fullscreen.svg';
import menuIcon from '../../assets/icon/menu-3.svg';
import HeaderButton2 from '../HeaderButton2/HeaderButton2';
import HeaderButton3 from '../HeaderButton3/HeaderButton3';

import './Header.scss';

Header.propTypes = {};

function Header(props) {
  return (
    <div>
      <div className="header">
        <div className="header-logo">
          <img src={logo} alt="" />
        </div>
        <div className="header-item">
          <HeaderButton2 />
          <div className="header-premium">
            <HeaderButton3 text=" Premium 🚀" />
          </div>
          <div className="header-signup">
            <HeaderButton3 text="Sign Up" />
          </div>
          <img src={shareIcon} alt="" />
          <img src={fullScreenIcon} alt="" />
          <div className="relative">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
