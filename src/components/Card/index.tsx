import React from 'react';
import { Character } from '../../common/interfaces/character.interface';

import { Container } from './styles';

interface CardProps {
  character: Character
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Container>
      <img src={props.character.image} alt={props.character.name} />
      <h2>{ props.character.name }</h2>
      <p>{ props.character.species }</p>
    </Container>
  );
};

export default Card;
