import styled, { css } from 'styled-components';
import { green, white } from './Colors';

const SideBar = styled.div`
  position: absolute;
  left: 0;
  padding: 50px 0;
  width: 20vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    height: 8rem;
  }
`;

const SideNav = styled.ul`
  list-style: none;
  margin-top: 24px;
  min-width: 170px;
  a{
    text-decoration: none;
    font-family: Roboto;
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const SideTopic = styled.li`
  padding: 11px;
  ${props => props.active && css`
    background: ${green};
    a{
     color: ${white};
    }
  `}
`;

const Container = styled.div`
  position: absolute;
  right: 0;
  width: 80vw;
  height: 100vh;
  background: red;
`;

export {
  SideBar, SideNav, SideTopic, Container,
};
