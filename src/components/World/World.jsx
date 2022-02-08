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
} from './helpers';

import './World.css';
import { MovingDirection } from '../../constants';

const World = (props) => {
  const {
    threeDimensional = false,
  } = props;

  const [game, setGame] = useRecoilState(gameState);
  const [hopper, setHopper] = useRecoilState(hopperState);
  const trucks = useRecoilValue(trucksState);
  const boats = useRecoilValue(boatsState);

  useEffect(() => {
    if (game.gameOver) {
      return;
    }

    if (isHitByTruck(hopper, trucks)) {
      console.log('hit by a truck');
      setGame({
        ...game,
        gameOver: true,
        win: false,
      });
      setHopper({
        ...hopper,
        dead: true,
      });
    }
  }, [game, setGame, hopper, setHopper, trucks]);

  useEffect(() => {
    if (game.gameOver) {
      return;
    }

    if (isDrowned(hopper, boats)) {
      console.log('drowned');
      setHopper({
        ...hopper,
        dead: true,
      });
    } else if (isRidingBoat(hopper, boats)) {
      const ride = boats.find((boat) => (
        boat.x === hopper.x && boat.y === hopper.y
      ));
      if (!ride) {
        return;
      }
      const x = ride.direction === MovingDirection.West ?
        ride.x - 1 : ride.x + 1;
      setHopper({
        ...hopper,
        x,
        y: ride.y,
      });
    }
  }, [game, setGame, hopper, setHopper, boats]);

  useEffect(() => {
    if (game.gameOver) {
      return;
    }

    if (hasReachedGoal(hopper)) {
      console.log('has reach goal');
      setGame({
        ...game,
        gameOver: true,
        win: true,
      });
    }
  }, [game, setGame, hopper, setHopper]);

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
