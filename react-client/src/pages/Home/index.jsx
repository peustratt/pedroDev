import AppBar from "../../components/AppBar";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Tecnologies from "../../components/Tecnologies";

const Home = () => {
  return (
    <div>
      <AppBar />
      <Hero />
      <Tecnologies />
      <Projects />
    </div>
  );
};

export default Home;
