export const WORLD_SIZE = 9;

export const GroundType = Object.freeze({
  Grass: 'grass',
  Water: 'water',
  Road: 'road',
});

export const MovingDirection = Object.freeze({
  North: 'north',
  South: 'south',
  East: 'east',
  West: 'west',
});

export const KeyCode = Object.freeze({
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
});

export const RoadLanes = [{
  number: 4, 
  direction: MovingDirection.West,
  occurrence: .5,
}, {
  number: 5, 
  direction: MovingDirection.East,
  occurrence: .1,
}, {
  number: 6, 
  direction: MovingDirection.West,
  occurrence: .1,
}, {
  number: 7, 
  direction: MovingDirection.East,
  occurrence: .1,
}];

export const RiverLanes = [{
  number: 1, 
  direction: MovingDirection.East,
  occurrence: .5,
}, {
  number: 2, 
  direction: MovingDirection.West,
  occurrence: .5,
}];

export const offsetX = 20 * 1.5;
export const offsetY = 15 * 1.5;
export const stepX = 82 * 1.5;
export const stepY = 62 * 1.5;
