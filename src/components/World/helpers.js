export const isHitByTruck = (hopper, trucks) => (
  trucks.some((truck) => (
    truck.x === hopper.x && truck.y === hopper.y
  ))
);

export const isDrowned = (hopper, boats) => (
  boats.some((boat) => (boat.y === hopper.y) 
  && boats.every((boat) => boat.x !== hopper.x))
);

export const isRidingBoat = (hopper, boats) => (
  boats.some((boat) => (
    boat.y === hopper.y && boat.x === hopper.x
  ))
);

export const hasReachedGoal = (hopper) => (
  hopper.y === 0
);
