import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import classNames from 'classnames';
import Boats from '../Boats';
import Landscape from '../Landscape';
import Trucks from '../Trucks';
import Hopper from '../Hopper';
import Inputs from '../Inputs';
import {
  gameState,
  hopperState,
  trucksState,
  boatsState,
} from '../../state';
import {
  isHitByTruck,
  isDrowned,
  isRidingBoat,
  hasReachedGoal
} from '../../helpers';

import './World.css';

const World = (props) => {
  const {
    threeDimensional = false,
  } = props;

  const [game, setGame] = useRecoilState(gameState);
  const [hopper, setHopper] = useRecoilState(hopperState);
  const trucks = useRecoilValue(trucksState);
  const boats = useRecoilValue(boatsState);

  useEffect(() => {
    const truck = isHitByTruck(hopper, trucks);

    if (truck && truck.id !== hopper.hitBy) {
      console.log('hit by a truck');
      setHopper({
        ...hopper,
        dead: true,
        hitBy: truck.id,
      });
    }
  }, [hopper, trucks, setHopper]);

  useEffect(() => {
    const ride = isRidingBoat(hopper, boats);
    const drowned = isDrowned(hopper, boats);

    if (drowned) {
      console.log('drowned');
      console.log(JSON.stringify(hopper));
      console.log(JSON.stringify(boats));
    } else if (ride && ride.id !== hopper.rideBy) {
      console.log('riding boat');
      setHopper({
        ...hopper,
        rideBy: ride.id,
      });
    }
  }, [hopper, boats, setHopper]);

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
