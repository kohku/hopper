import React from 'react';
import north from '../../images/bell-N@640.png';
import east from '../../images/bell-E@640.png';
import south from '../../images/bell-S@640.png';
import west from '../../images/bell-W@640.png';

const Bell = ({ direction = 'north'}) => {

  let logo = north;

  switch(direction) {
    case "north":
      logo = north;
      break;
    case "east":
      logo = east;
      break;
    case 'south':
      logo = south;
      break;
    case 'west':
      logo = west;
      break;
  }

  return (
    <div className="bell">
      <img src={logo} className="bell" alt="logo" />
    </div>
  );
}

export default Bell;
