import React, { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import useInterval from '../../hooks/useInterval';
import Hazard, { HazardType } from '../Hazard';
import { WORLD_SIZE, MovingDirection } from '../../constants'

const truckState = atom({
  key: "boats",
  default: [{
    x: -1,
    y: 1,
    direction: MovingDirection.East,
    id: uuid(),
  }, {
    x: WORLD_SIZE,
    y: 2,
    direction: MovingDirection.West,
    id: uuid(),
  }],
});

const Boats = () => {
  const [boats, setBoats] = useRecoilState(truckState);

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
    // Algorithm to create new trucks
    newBoats.push({
      x: -1,
      y: 1,
      direction: MovingDirection.East,
      id: uuid(),
    }, {
      x: WORLD_SIZE,
      y: 2,
      direction: MovingDirection.West,
      id: uuid(),
    });
    setBoats(boatsCopy.filter((boat) => (
      boat.x < WORLD_SIZE && boat.x >= 0
    )).concat(newBoats));
  }, [boats, setBoats]);

  useInterval(() => {
    moveTrucks();
  }, 500);

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
