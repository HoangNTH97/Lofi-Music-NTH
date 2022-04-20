import React from 'react';
import PropTypes from 'prop-types';
import './RelativeList.scss';

RelativeList.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

function RelativeList({ text, src }) {
  return (
    <div>
      <div className="menu-item">
        <img src={src} alt="" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default RelativeList;
