import styled from "styled-components";

const AppBarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  box-shadow: ${({ theme }) => theme.shadows.primary};
  background-color: ${({ theme }) => theme.colors.primary.main};
`;

export default AppBarContainer;
