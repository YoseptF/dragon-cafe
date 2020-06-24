import styled, { css } from 'styled-components';
import { white } from './Colors';

const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const Window = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const List = styled.div`
  transition: all 1.5s ease;
  margin-top: ${props => `calc( -100vh * ${props.slide})`};
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.image && css`
    background-image: url(${props => props.image});
    background-position: center;
    background-repeat: no-repeat;
  `}

  h1{
    color: ${white};
    font-family: 'DLE Futuristic';
    font-size: 4.5rem;
    text-transform: uppercase;
    letter-spacing: 0.8rem;
  }
`;

const Dots = styled.ul`
  position: absolute;
  bottom: 4rem;
  right: 3rem;
  display: flex;
  flex-direction: column;
  list-style: none;
`;

const Dot = styled.li`
  margin-bottom: 1rem;
  color: ${white};
`;

export {
  Slider, Slide, Window, List, Dots, Dot,
};
