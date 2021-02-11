import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Nav = styled.nav`
  background: black;
  height: 80px;
  font-weight: 680;
  display: flex;
  max-width: 100%;
`;
export const Component = styled.div`
  font-size: 1.2rem;
  color: blue;
  cursor: pointer;
  z-index: 10;
  display: flex;
  .icon-bar {
    justify-content: flex-start;
    flex-direction: none;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  margin: 1em;
`;
export const NavIcon = styled.div`
  flex-direction: flex-end;
  background-color:white;
`;
