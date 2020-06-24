import React from 'react';
import * as S from '../presentational/Home.styles';
import Nav from '../presentational/Nav';
import Slider from './Slider';
import Dots from '../presentational/Dots';

const Home = () => (
  <S.MainContainer>
    <Nav />
    <Slider />
  </S.MainContainer>
);

export default Home;
