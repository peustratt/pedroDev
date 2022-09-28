import {
  SiJavascript,
  SiDocker,
  SiReact,
  SiPython,
  SiExpress,
  SiGithub,
  SiMysql,
  SiMongodb,
  SiCss3,
  SiHtml5,
  SiRedis,
  SiHeroku,
  SiLinux,
  SiJava,

} from "react-icons/si";

const main_icons = [
  {
    name: "Javascript",
    icon: <SiJavascript />,
    link: 'https://www.javascript.com/'
  },
  {
    name: "React",
    icon: <SiReact />,
    link: 'https://pt-br.reactjs.org/'
  },
  {
    name: "Express",
    icon: <SiExpress />,
    link: 'https://expressjs.com/pt-br/'
  },
  {
    name: "Python",
    icon: <SiPython />,
    link: 'https://www.python.org/'
  },
  {
    name: "Github",
    icon: <SiGithub />,
    link: 'https://github.com/'
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
    link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
    link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
];

const secondary_icons = [
  {
    name: "MySQL",
    icon: <SiMysql />,
    link: 'https://www.mysql.com/'
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    link: 'https://www.mongodb.com/'
  },
  {
    name: "Docker",
    icon: <SiDocker />,
    link: 'https://www.docker.com/'
  },
  {
    name: "Redis",
    icon: <SiRedis />,
    link: 'https://redis.io/'
  },
  {
    name: "Heroku",
    icon: <SiHeroku />,
    link: 'https://www.heroku.com/'
  },
  {
    name: "Linux",
    icon: <SiLinux />,
    link: 'https://www.linux.org/'
  },
  {
    name: "Java",
    icon: <SiJava />,
    link: 'https://www.java.com/pt-BR/'
  }
];

export { main_icons, secondary_icons };
