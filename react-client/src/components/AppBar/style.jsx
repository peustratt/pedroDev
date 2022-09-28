import styled from "styled-components";
import { Section, Container } from "../../GlobalStyle";

const AppBarStyled = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  background-color: ${({ theme }) => theme.colors.primary.main};
  z-index: 2;
`;

export const AppBarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .hamburguer {
    height: fit-content;
    display: flex;
    align-items: center;
    border-radius: 5px;
    transition: 0.2s;
    &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
    }
    > svg {
      font-size: 1.8em;
    }
  }
  .nav-list {
    display: flex;
    gap: 1.5em;
    list-style: none;

    > li {
      cursor: pointer;
      font-weight: 700;
      transition: 120ms;
      &:hover {
        color: #fff;
      }
    }
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 1em;
  > svg {
    font-size: 1.25em;
  }
`;

export default AppBarStyled;
