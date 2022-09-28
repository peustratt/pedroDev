import styled from "styled-components";
import { Section, Container } from "../../GlobalStyle";

const HeroSection = styled(Section)`
  position: relative;
  min-height: calc(100vh - 50px);
  display: flex;
  margin-top: 50px;
`;

export const ImgWrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  @keyframes zoom {
    0% {
      scale: 1.3;
    }
    100% {
      scale: 1;
    }
  }
  > img {
    opacity: 0.5;
    animation: zoom 25s;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroContainer = styled(Container)`
  padding-top: 1em;
  padding-bottom: 1em;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3rem;
  justify-content: center;

  @media (min-width: 1260px) {
    justify-content: space-between;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    > button {
      background-color: ${({ theme }) => theme.colors.primary.main};
      border-radius: 5px;
      border: none;
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
      font-size: 1.2em;
      font-weight: 700;
      margin-top: 3em;
      padding: 0.5em 1em;
      transform-origin: center;
      transition: all 0.1s ease-in-out;
      text-transform: uppercase;
      width: fit-content;

      &:hover {
        transform: scale(1.015);
      }
    }
  }
`;

export const HeroAvatar = styled.div`
  min-width: 200px;
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  border: 10px solid ${({ theme }) => theme.colors.primary.main};
`;

export default HeroSection;
