import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/rick-and-morty-logo.svg';
import { useGetCharacters } from '../../hooks/characters/userGetCharacters';
import Card from '../../components/Card';

const Home: React.FC = () => {
  const charactersData = useGetCharacters();

  return (
    <Container>
      <img src={logoImg} alt="Rick and Morty"/>

      {charactersData?.results.map((character, index) => (
        <Card key={index} character={character}/>
      ))}
    </Container>
  );
};

export default Home;
