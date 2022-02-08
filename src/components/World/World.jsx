import React from 'react';
import classNames from 'classnames';
import Boats from '../Boats';
import Landscape from '../Landscape';
import Trucks from '../Trucks';
import Hopper from '../Hopper';
import Inputs from '../Inputs';
import './World.css';

const World = (props) => {
  const {
    threeDimensional = false,
  } = props;

  return (
    <div
      className={classNames(
        'world',
        { 'world--3D': threeDimensional },
      )}
    >
      <Landscape />
      <Trucks />
      <Boats />
      <Hopper />
      <Inputs />
    </div>
  );
};

export default World;
