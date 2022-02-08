import React from 'react';
import classNames from 'classnames';

import './Tile.css';

const Tile = (props) => {
  const {
    ground,
  } = props;

  return (
    <div
      className={classNames(
        'tile',
        `tile__ground--${ground}`
      )}     
    />
  );
};

export default Tile;
