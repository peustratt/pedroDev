import { Heading, MainHeading, Button } from "../../GlobalStyle";
import HeroSection, {
  ImgWrapper,
  Img,
  HeroContainer,
  HeroAvatar,
} from "./style";

const Hero = () => {
  return (
    <HeroSection inverse={true} padding="0" smPadding="0">
      <ImgWrapper>
        {/* <Img src="/images/Focal-Fossa-wallpaper-greyscale.jpg" /> */}
        <Img src="/images/augustine-wong-li0iC0rjvvg-unsplash.jpg" />
      </ImgWrapper>
      <HeroContainer>
        <div className="wrapper">
          <MainHeading inverse={true}>Pedro Ivo</MainHeading>
          <Heading>Full-stack Developer</Heading>
          <Button>Projetos</Button>
        </div>
        <HeroAvatar>
          <Img src="https://avatars.githubusercontent.com/u/74071424?s=400&u=83943996dc32a5bdce2caf1f3be82ba838bf4965&v=4" />
        </HeroAvatar>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
