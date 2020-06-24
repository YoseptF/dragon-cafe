import styled from 'styled-components';
import { yellow, white } from './Colors';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: ${yellow};
    overflow: hidden;
`;

const Nav = styled.nav`
    width: 100%;
    padding: 28px 36px;
    display: flex;
    justify-content: space-between;
    i {
        padding: 18px 20px;
        font-size: 2rem;
        color: ${white};
        &:last-child {
            color: ${yellow};
            background: ${white};
            border-radius: 40%;
            transform: rotate3d(0, 1, 0, 180deg);
        }
    }
`;

export { MainContainer, Nav };
