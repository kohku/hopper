import React from 'react';
import { useRecoilValue } from 'recoil';
import {
  WORLD_SIZE,
  offsetX,
  offsetY,
  stepX,
  stepY,
} from '../../constants';
import Bell from '../Bell';
import { hopperState } from '../../state';
import './Hopper.css';

const Hopper = (props) => {
  const { x, y, direction } = useRecoilValue(hopperState);

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