import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

const projects = {
  1: {
    title: "Portfolio Website",
    image: projectOne,
    description: (
      <>
        <p>
        I built this portfolio as a game-inspired app using HTML, CSS, JavaScript, and React to make exploring my skills and projects fun and interactive. The site features dynamic animations, smooth transitions, and a unique navigation experience, turning each section into an exciting journey. It's a creative spin on a classic portfolio, designed to engage and impress potential employers and collaborators.
        </p>
      </>
    ),
    github: "https://github.com/muzzigit/react-portfolio-v1",
    demo: "https://muzzikhanportfolio.netlify.app/",
  },
  3: {
    title: "MyTree App",
    image: projectTwo,
    description: (
      <>
        <p>
        Explore my world through a custom-built alternative "Linktree" page! Designed from scratch using HTML and CSS, it showcases my latest projects, GitHub contributions, and professional profile, all in one sleek, responsive interface. Dive in and connect with me!
        </p>
      </>
    ),
    github: "https://github.com/muzzigit/MyTree",
    demo: "https://muzzi-linktree.netlify.app/",
  },
  2: {
    title: "Bitcoin Price Bot",
    image: projectThree,
    description: (
      <>
        <p>
        Developed a Discord bot using Node.js that fetches real-time Bitcoin prices via the CoinDesk API and displays them in both USD and CAD. The bot responds to user commands with detailed price information, updates its status automatically, and offers interactive embeds for a seamless experience.
        </p>
      </>
    ),
    github: "https://github.com/muzzigit/bitcoin-price-bot",
    demo: "https://discord.gg/DUC2WqQ9",               
  },           
};

export default projects;
