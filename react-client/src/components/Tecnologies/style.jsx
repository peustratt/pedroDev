import styled from "styled-components";
import { Section, Container, Heading, TextWrapper } from "../../GlobalStyle";

export const TecnologiesSection = styled(Section)``;
export const TecnologiesContainer = styled(Container)``;
export const TecnologiesHeading = styled(Heading)`
  color: #fff;
  margin-bottom: 1em;
`;

export const TecnologiesSecondaryHeading = styled.h3`
  color: #fff;
  font-size: 1.5em;
  font-weight: 700;
  margin-bottom: 1.5em;
  text-align: center;
`;

export const TecnologiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 4em;
  position: relative;
  padding-bottom: 1em;

  @media (min-width: 694px) {
    gap: 2em;
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 60%;
      background-color: #fff;
      border-radius: 5px;
      opacity: 0.6;
    }
  }
`;

export const MainTecnologies = styled.div`
  @media (max-width: 693px) {
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 2px;
      background-color: #fff;
      border-radius: 5px;
      opacity: 0.6;
    }
  }
`;

export const SecondaryTecnologies = styled.div``;

export const TecnologiesIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2em;
  justify-content: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 1em;
  background-color: #efefef;
  min-width: 100px;
  max-width: 350px;
  gap: 1em;
  transition: 0.2s;
  /* box-shadow: rgba(255, 255, 255, .3)  0px 5px 15px; */
  box-shadow: rgba(255, 255, 255, .3) 0px 4px 8px -2px, rgba(255, 255, 255, .3) 0px 0px 0px 1px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 15px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 9px 36px -18px inset;
  }

  > svg {
    width: 100%;
    height: 100%;
  }
`;

export const TecnologiesTextWrapper = styled(TextWrapper)`
  text-align: center;
  font-size: 0.8em;
  font-weight: 700;
`;
