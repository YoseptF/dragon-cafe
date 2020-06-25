import styled, { css } from 'styled-components';
import { yellow, white } from './Colors';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${yellow};
    overflow: hidden;
`;

const Nav = styled.nav`
    position: absolute;
    z-index:100;
    width: 100%;
    padding: 28px 36px;
    display: flex;
    justify-content: space-between;
    i {
      cursor:pointer;
      padding: 18px 20px;
      font-size: 2rem;
      color: ${white};
      &:focus{
        outline: none;
      }
      &:last-child {
          color: ${yellow};
          background: ${white};
          border-radius: 40%;
          transform: rotate3d(0, 1, 0, 180deg);
      }
    }
`;

const Hamburguer = styled.div`
  background-color: transparent;
  overflow: hidden;
  height: 70px;
  width: 70px;
  transition: all 500ms ease;
  ${props => props.active && css`
    height: unset;
    width: unset;
    background: ${white};
    padding: 24px;
    border-radius: 11px;
    i{
      color: ${yellow};
    }
  `}
  ul{
    list-style: none;
    margin-top: 24px;
    margin-left: 20px;
    color: ${yellow};
    font-family: Roboto;
    font-weight: bold;
    font-size: 2rem;
  }
  a{
    color: ${yellow};
    text-decoration: none;
  }
  li{
    margin-top: 8px;
    &:hover{
      text-decoration: underline;
    }
  }
`;

const Search = styled.form`
  position: relative;
  input{
    border: none;
    border-radius: 4px;
    margin: 0px 21px;
    padding: 15px;
    font-size: 2rem;
    transition: all 1s ease;
    width: ${props => (props.active ? '42vmin' : '0px')};
  }
  i{
    position: absolute;
    right: 0;
  }
`;

export {
  MainContainer, Nav, Hamburguer, Search,
};
