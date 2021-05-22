import styled from 'styled-components';

import BackgroundImage from '../../assets/rick-and-morty-background.png';

export const Container = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: 38px;
  }
`;
