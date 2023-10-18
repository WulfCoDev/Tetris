import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gameOver, text }) => (
  <StyledDisplay className='font-primary' gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;