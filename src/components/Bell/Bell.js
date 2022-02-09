import React from 'react';
import classNames from 'classnames';
import { MovingDirection } from '../../constants';
import north from '../../images/bell-N@640.png';
import ana from '../../images/IMG_9220.png';

import './Bell.css';

const Bell = (props) => {
  const {
    direction = MovingDirection.North,
  } = props;

  return (
    <div
      className={classNames(
        'bell',
        `bell--${direction}`,
      )}
    >
      <img src={north} className="bell" alt="logo" />
    </div>
  );
}

export default Bell;
