import React from 'react';
import classNames from 'classnames';
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

const Hopper = () => {
  const {
    x,
    y,
    direction,
    rideBy,
  } = useRecoilValue(hopperState);

  return (
    <div
      className={classNames('hopper',
        {'hopper--riding': rideBy}
      )}
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