import React from 'react';
import inner from '../../assets/Media/night.5e06c080aafe377b5acdc9d515f8def6.svg';

import './HeaderButton.scss';

HeaderButton.propTypes = {};

function HeaderButton(props) {
  return (
    <div>
      <div className="header-button">
        <button type="button">
          <div className="switch-handle"></div>
          <span className="switch-inner">
            <img src={inner} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeaderButton;
