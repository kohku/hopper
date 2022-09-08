import classNames from 'classnames';
import React from 'react';
import {
  WORLD_SIZE,
  offsetX,
  offsetY,
  stepX,
  stepY,
} from '../../constants';
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
    children,
  } = props;

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
      {children}
    </div>
  );
};

export default Hazard;
