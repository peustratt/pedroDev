import { useState } from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import AppBarStyled, { IconsWrapper, AppBarContainer } from "./style";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBarStyled>
      <AppBarContainer>
        <IconsWrapper>
          <GoMarkGithub />
          <FaLinkedin />
        </IconsWrapper>
        <div className="hamburguer">
          <BiMenu />
        </div>
      </AppBarContainer>
    </AppBarStyled>
  );
};

export default AppBar;
