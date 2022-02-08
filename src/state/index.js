import { atom } from 'recoil';
import { v4 as uuid } from 'uuid';
import { WORLD_SIZE, MovingDirection } from './../constants';

export const gameState = atom({
  key: 'game',
  default: {
    gameOver: false,
    win: false,
  },
});

export const initialHopperState = {
  x: Math.floor(WORLD_SIZE / 2),
  y: WORLD_SIZE - 1,
  direction: MovingDirection.North,
  dead: false,
};

export const hopperState = atom({
  key: 'hopper',
  default: initialHopperState,
});

export const trucksState = atom({
  key: 'trucks',
  default: [{
    x: -1,
    y: 6,
    direction: MovingDirection.East,
    id: uuid(),
  }, {
    x: WORLD_SIZE,
    y: 5,
    direction: MovingDirection.West,
    id: uuid(),
  }],
});

export const boatsState = atom({
  key: 'boats',
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
