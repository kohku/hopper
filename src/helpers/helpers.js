export const isHitByTruck = (hopper, trucks) => (
  trucks.find((truck) => (
    truck.x === hopper.x && truck.y === hopper.y
  ))
);

export const isRidingBoat = (hopper, boats) => (
  boats.find((boat) => (
    boat.y === hopper.y && boat.x === hopper.x
  ))
);

export const isDrowned = (hopper, boats) => (
  boats.some((boat) => (boat.y === hopper.y))
  && !isRidingBoat(hopper, boats)
);

export const hasReachedGoal = (hopper) => (
  hopper.y === 0
);
