import React from 'react';
import { MovingDirection } from '../../constants';
import north from '../../images/bell-N@640.png';
import east from '../../images/bell-E@640.png';
import south from '../../images/bell-S@640.png';
import west from '../../images/bell-W@640.png';

import './Bell.css';

const Bell = (props) => {
  const {
    direction = MovingDirection.North,
  } = props;

  let logo = north;

  switch(direction) {
    case MovingDirection.South:
      logo = south;
      break;
    case MovingDirection.East:
      logo = east;
      break;
    case MovingDirection.West:
      logo = west;
      break;
    default:
      logo = north;
      break;
  }

  return (
    <div className="bell">
      <img src={logo} className="bell" alt="logo" />
    </div>
  );
}

export default Bell;
