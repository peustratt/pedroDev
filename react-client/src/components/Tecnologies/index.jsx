import {
  TecnologiesSection,
  TecnologiesContainer,
  TecnologiesHeading,
  TecnologiesIcons,
  IconWrapper,
  MainTecnologies,
  SecondaryTecnologies,
  TecnologiesWrapper,
  TecnologiesSecondaryHeading,
  TecnologiesTextWrapper,
} from "./style";

import { main_icons, secondary_icons } from "./data";

const Tecnologies = () => {
  const handleLink = (link) => {
    window.open(link);
  };
  return (
    <TecnologiesSection>
      <TecnologiesContainer>
        <TecnologiesHeading>My stacks</TecnologiesHeading>
        <TecnologiesWrapper>
          <MainTecnologies>
            <TecnologiesSecondaryHeading>
              Principais
            </TecnologiesSecondaryHeading>
            <TecnologiesIcons>
              {main_icons.map((i, index) => (
                <IconWrapper key={index} onClick={() => handleLink(i.link)}>
                  <TecnologiesTextWrapper>{i.name}</TecnologiesTextWrapper>
                  {i.icon}
                </IconWrapper>
              ))}
            </TecnologiesIcons>
          </MainTecnologies>
          <SecondaryTecnologies>
            <TecnologiesSecondaryHeading>
              Conhecimentos
            </TecnologiesSecondaryHeading>
            <TecnologiesIcons>
              {secondary_icons.map((i, index) => (
                <IconWrapper key={index} onClick={() => handleLink(i.link)}>
                  <TecnologiesTextWrapper>{i.name}</TecnologiesTextWrapper>
                  {i.icon}
                </IconWrapper>
              ))}
            </TecnologiesIcons>
          </SecondaryTecnologies>
        </TecnologiesWrapper>
      </TecnologiesContainer>
    </TecnologiesSection>
  );
};

export default Tecnologies;
