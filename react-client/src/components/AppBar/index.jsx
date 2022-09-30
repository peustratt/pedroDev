import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import AppBarStyled, { IconsWrapper, AppBarContainer } from "./style";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Projetos", path: "/projetos" },
  { name: "Tecnologias", path: "/tecnologias" },
];

const AppBar = () => {
  const [open, setOpen] = useState(false);
  const { width, height } = useWindowDimensions();
  const navLinksElements = navLinks.map((link, index) => (
    <li key={index}>{link.name}</li>
  ));

  return (
    <AppBarStyled>
      <AppBarContainer>
        <IconsWrapper>
          <GoMarkGithub />
          <FaLinkedin />
        </IconsWrapper>

        {width < 600 ? (
          <div className="hamburguer">
            <BiMenu />
          </div>
        ) : (
          <ul className="nav-list">{navLinksElements}</ul>
        )}
      </AppBarContainer>
    </AppBarStyled>
  );
};

export default AppBar;
