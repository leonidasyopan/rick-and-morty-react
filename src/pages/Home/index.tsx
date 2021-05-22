import React from 'react';

import { Container } from './styles';

import logoImg from '../../assets/rick-and-morty-logo.svg';

const Home: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Rick and Morty"/>

    </Container>
  );
};

export default Home;
