import React from 'react';
import { atom, useRecoilValue } from 'recoil';
import { MovingDirection, WORLD_SIZE } from '../../constants';
import Bell from '../Bell';
import './Hopper.css';

const hopperState = atom({
  key: 'hopperState',
  default: {
    x: Math.floor(WORLD_SIZE / 2),
    y: WORLD_SIZE - 1,
    direction: MovingDirection.North,
    dead: false,
  },
});

const Hopper = (props) => {
  const { x, y, direction } = useRecoilValue(hopperState);

  const offsetX = 20;
  const offsetY = 15;
  const stepX = 82;
  const stepY = 62;

  return (
    <div
      className='hopper'
      style={{
        left: (x * stepX) + offsetX,
        top: (y * stepY) + offsetY,
        opacity: x < 0 || x > WORLD_SIZE - 1 ? 0 : 1,
      }}
    >
      <Bell direction={direction} />
    </div>
  );
};


export default Hopper;