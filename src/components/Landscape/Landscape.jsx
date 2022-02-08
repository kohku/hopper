import React from 'react';
import Tile from '../Tile/Tile';
import './Landscape.css';

import { WORLD_SIZE, GroundType } from '../../constants';

const board = [];

board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Grass }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Water }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Water }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Grass }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Road }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Road }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Road }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Road }));
board.push(Array(WORLD_SIZE).fill({ ground: GroundType.Grass }));

const Landscape = () => {

  return (
    <div className='board'>
      {board.map((row, rowIndex) => (
        <div
          key={`row-${rowIndex}`}
          className='board__row'>
          {row.map((tile, index) => (
            <Tile key={`tile-${index}`} ground={tile.ground} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Landscape;
