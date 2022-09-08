import React from 'react';
import classNames from 'classnames';
import { MovingDirection } from '../../constants';
import bell from '../../images/bell-N@640.png';
// import ana from '../../images/IMG_9220.png';

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
      <img src={bell} className="bell" alt="logo" />
      {/* <img src={ana} className="ana" alt="logo" /> */}
    </div>
  );
}

export default Bell;
