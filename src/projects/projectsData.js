import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Personal Porrtfolio Website",
    image: projectOne,
    description: (
      <>
        <p>
        I built this portfolio as a game-inspired app using HTML, CSS, JavaScript, and React to make exploring my skills and projects fun and interactive. The site features dynamic animations, smooth transitions, and a unique navigation experience, turning each section into an exciting journey. It's a creative spin on a classic portfolio, designed to engage and impress potential employers and collaborators.
        </p>
      </>
    ),
    github: "https://github.com/muzzigit/react-portfolio-v1",
    demo: "https://netlify.com",
  },
  2: {
    title: "Productivity App",
    image: projectTwo,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
  3: {
    title: "Food Delivery App",
    image: projectThree,
    description: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </>
    ),
    github: "https://github.com",
    demo: "https://netlify.com",
  },
};

export default projects;
