import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import useInterval from '../../hooks/useInterval';
import Hazard, { HazardType } from '../Hazard';
import {
  WORLD_SIZE,
  MovingDirection,
  RiverLanes,
} from '../../constants'
import {
  hopperState,
  boatsState,
} from '../../state';
import { probability } from '../../utils';

const Boats = () => {
  const [hopper, setHopper] = useRecoilState(hopperState);
  const [boats, setBoats] = useRecoilState(boatsState);

  const moveTrucks = useCallback(() => {
    const boatsCopy = boats.map((boat) => {
      if (boat.direction === MovingDirection.East) {
        return {
          ...boat,
          x: boat.x + 1,
        };
      } else {
        return {
          ...boat,
          x: boat.x - 1,
        };
      }
    });
    const newBoats = [];
    RiverLanes.forEach((lane) => {
      if (probability(lane.occurrence)) {
        newBoats.push({
          x: lane.direction === MovingDirection.West
            ? WORLD_SIZE
            : -1,
          y: lane.number,
          direction: lane.direction,
          id: uuid(),
        });
      }
    });
    setBoats(boatsCopy.filter((boat) => (
      boat.x < WORLD_SIZE && boat.x >= 0
    )).concat(newBoats));
    if (hopper.rideBy) {
      const ride = boatsCopy.find((boat) => boat.id === hopper.rideBy);
      if (ride) {
        setHopper({
          ...hopper,
          x: ride.x,
          y: ride.y,
          rideBy: ride.id,
        });
      }
    }
  }, [boats, setBoats, hopper, setHopper]);

  useInterval(() => {
    moveTrucks();
  }, 1500);

  return (
    <>
      {boats.map(({ id, x, y, direction }) => (
        <Hazard
          key={id}
          x={x}
          y={y}
          direction={direction}
          hazardType={HazardType.Boat}
        />
      ))}
    </>
  );
};

export default Boats;
