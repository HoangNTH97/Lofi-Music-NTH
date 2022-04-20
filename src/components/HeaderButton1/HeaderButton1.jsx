import React, { useState } from 'react';
import iconDay from '../../assets/Media/night.5e06c080aafe377b5acdc9d515f8def6.svg';
import iconNight from '../../assets/Media/day.d259f96b006901d75223f789f5835736.svg';

import './HeaderButton1.scss';

HeaderButton1.propTypes = {};

function HeaderButton1(props) {
  const [on, setOn] = useState(false);

  const handleToggle = () => {
    // setOn(callback) -> setOn(prevState) => !prevState
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`header-button1 ${on ? 'active' : ''}`} onClick={handleToggle}>
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
    </div>
  );
}

export default HeaderButton1;
