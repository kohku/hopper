import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import useInterval from '../../hooks/useInterval';
import Hazard, { HazardType } from '../Hazard';
import {
  WORLD_SIZE,
  MovingDirection,
  RoadLanes,
} from '../../constants'
import { trucksState } from '../../state';
import { probability } from '../../utils';

const Trucks = () => {
  const [trucks, setTrucks] = useRecoilState(trucksState);

  const moveTrucks = useCallback(() => {
    const trucksCopy = trucks.map((truck) => {
      if (truck.direction === MovingDirection.East) {
        return {
          ...truck,
          x: truck.x + 1,
        };
      } else {
        return {
          ...truck,
          x: truck.x - 1,
        };
      }
    });
    const newTrucks = [];
    RoadLanes.forEach((lane) => {
      if (probability(lane.occurrence)) {
        newTrucks.push({
          x: lane.direction === MovingDirection.West
            ? WORLD_SIZE
            : -1,
          y: lane.number,
          direction: lane.direction,
          id: uuid(),
        });
      }
    });
    setTrucks(trucksCopy.filter((truck) => (
      truck.x < WORLD_SIZE && truck.x >= 0
    )).concat(newTrucks));
  }, [trucks, setTrucks]);

  useInterval(() => {
    moveTrucks();
  }, 500);

  return (
    <>
      {trucks.map(({ id, x, y, direction }) => (
        <Hazard
          key={id}
          x={x}
          y={y}
          direction={direction}
          hazardType={HazardType.Truck}
        />
      ))}
    </>
  );
};

export default Trucks;
