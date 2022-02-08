import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { v4 as uuid } from 'uuid';
import useInterval from '../../hooks/useInterval';
import Hazard, { HazardType } from '../Hazard';
import { WORLD_SIZE, MovingDirection } from '../../constants'
import { trucksState } from '../../state';

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
    // Algorithm to create new trucks
    newTrucks.push({
      x: -1,
      y: 6,
      direction: MovingDirection.East,
      id: uuid(),
    }, {
      x: WORLD_SIZE,
      y: 5,
      direction: MovingDirection.West,
      id: uuid(),
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
