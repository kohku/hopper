import classNames from 'classnames';
import React from 'react';
import { WORLD_SIZE } from '../../constants';
import './Hazard.css';

export const HazardType = Object.freeze({
  Truck: 'truck',
  Boat: 'boat',
});

const Hazard = (props) => {
  const {
    x = 0,
    y = 0,
    hazardType = HazardType.Truck,
  } = props;

  const offsetX = 20;
  const offsetY = 15;
  const stepX = 82;
  const stepY = 62;

  return (
    <div
      className={classNames(
        'hazard',
        `hazard--${hazardType}`,
      )}
      style={{
        left: (x * stepX) + offsetX,
        top: (y * stepY) + offsetY,
        opacity: x < 0 || x > WORLD_SIZE - 1 ? 0 : 1,
      }}
    >
    </div>
  );
};

export default Hazard;
