import React from 'react';
import { atom, useRecoilState } from 'recoil';
import useEventListener from '../../hooks/useEventListener';
import useThrottle from '../../hooks/useThrottle';
import { KeyCode, WORLD_SIZE, MovingDirection } from '../../constants';

const hopperState = atom({
  key: 'hopperState',
  default: {
    x: Math.floor(WORLD_SIZE / 2),
    y: WORLD_SIZE - 1,
    direction: MovingDirection.North,
    dead: false,
  },
});

const Inputs = () => {
  const [hopper, setHopper] = useRecoilState(hopperState);

  const updatePosition = useThrottle((keyCode) => {
    switch(keyCode) {
      case KeyCode.ArrowUp:
        setHopper({
          ...hopper,
          y: hopper.y > 0 ? hopper.y - 1 : hopper.y,
          direction: MovingDirection.North,
        });
        break;
      case KeyCode.ArrowRight:
        setHopper({
          ...hopper,
          x: hopper.x < WORLD_SIZE - 1 ? hopper.x + 1 : hopper.x,
          direction: MovingDirection.East,
        });
        break;
      case KeyCode.ArrowDown:
        setHopper({
          ...hopper,
          y: hopper.y < WORLD_SIZE - 1 ? hopper.y + 1 : hopper.y,
          direction: MovingDirection.South,
        });
        break;
      case KeyCode.ArrowLeft:
        setHopper({
          ...hopper,
          x: hopper.x > 0 ? hopper.x - 1 : hopper.x,
          direction: MovingDirection.West,
        });
        break;
      default:
        break;
    }
  }, 500);

  const onKeyPress = (event) => {
    event.preventDefault();

    updatePosition(event.keyCode);
  };

  useEventListener('keydown', onKeyPress);

  return <></>;
};

export default Inputs;
