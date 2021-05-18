import {
  faCss3Alt,
  faReact,
  faHtml5,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";

import imageBwV1 from "../../assets/images/bwV1.png";
import imageBwV2 from "../../assets/images/newBudgetW.png";
import toDoList from "../../assets/images/TodoList.png";
import sodasProject from "../../assets/images/sodasV1.png";
import sodasProjectReact from "../../assets/images/sodasV2.png";
import myPortfolio from "../../assets/images/myPortfolio-react.png";
import codeWarsImg from "../../assets/images/kata.png";
import dogImg from "../../assets/images/dogs.png";
import filmBox from "../../assets/images/Screenshot 2021-05-16 at 18.11.15.png";

const projects = [
  {
    id: 1,
    projectTitle: "Film box",
    image: filmBox,
    description1: `Budget World 2.0 is a fully functional application built using React.js class components. To have more flexibility when manipulating data, I have included REDUX for state management. Furthermore, I’m using FIREBASE to store data and manage the API operations. I'm using AXIOS library throughout the project.`,
    description2: `Authentication is fully functional and routing helps for limiting page accessibility. Fully RESPONSIVE`,
    languages: [faReact],
    technologies: [
      "React",
      "SASS",
      "Redux",
      "Hooks",
      "Axios",
      "TMDB Api",
      "Firebase",
      "Authentication",
      "Profile page, Rating features",
    ],
    links: {
      linkGitHub:
        "https://github.com/CarlosSuarezJS20/Budget-World-react.js-v2.0",

      linkPage: "https://budget-world-reactjs.web.app/",
    },
  },
  {
    id: 2,
    projectTitle: "World Budget App v2.0",
    image: imageBwV2,
    description1: `Budget World 2.0 is a fully functional application built using React.js class components. To have more flexibility when manipulating data, I have included REDUX for state management. Furthermore, I’m using FIREBASE to store data and manage the API operations. I'm using AXIOS library throughout the project.`,
    description2: `Authentication is fully functional and routing helps for limiting page accessibility. Fully RESPONSIVE`,
    languages: [faReact],
    technologies: [
      "React",
      "Css modules",
      "Redux",
      "Hooks",
      "Axios",
      "Class components",
      "Firebase",
      "Authentication",
      "Profile page, Rating features",
    ],
    links: {
      linkGitHub:
        "https://github.com/CarlosSuarezJS20/Budget-World-react.js-v2.0",

      linkPage: "https://budget-world-reactjs.web.app/",
    },
  },
  {
    id: 3,
    projectTitle: "Puppy Finder",
    image: dogImg,
    description1: `This web-app helps users find their ideal puppy dog. they can find dogs depending on breed, temperaments and sizes. Try it out!`,
    description2: `This is a single page app, powered by React.js. I have used React-Routing and Redux for state management. I have included additional libraries such as AXIOS, React-Slick Page is fully RESPONSIVE`,
    languages: [faReact],
    technologies: ["React", "Context API", "Hooks", "Axios", "Firebase"],

    links: {
      linkGitHub: "https://github.com/CarlosSuarezJS20/puppyLand",

      linkPage: "https://puppyfinder-378cf.web.app/",
    },
  },
  {
    id: 4,
    projectTitle: "Rainbow Soda UK",
    image: sodasProjectReact,
    description1: `This project is built on React.js using REACT HOOKS. Context, useState() and useEffect() to manage the state elements and facilitate the flow of data through different components.`,
    description2: `For fetching the information from the server,  I’m using the FETCH() method available through javaScript. Fully RESPONSIVE`,
    languages: [faReact],
    technologies: [
      "React",
      "css",
      "Redux",
      "Hooks",
      "FETCH",
      "Hooks",
      "Firebase",
    ],
    links: {
      linkGitHub:
        "https://github.com/CarlosSuarezJS20/Rainbow-Sodas-uk-React.V2.0",

      linkPage: "https://rainbow-soda-uk.web.app/",
    },
  },
  {
    id: 5,
    projectTitle: "World Budget App v1.0",
    image: imageBwV1,
    description1: `The idea behind this project was to create a very fast way for travellers to find how much things cost in their holidays destination. Users can add, delete, edit existing items and filter as they wish.`,
    description2: `This is a single page app, powered by javaScript. I have added Node.js and use PASSPORT, BCRYPT, EFLASH libraries to make authentication more realistic. As the app uses NODE.JS. Fully RESPONSIVE`,
    languages: [faJsSquare, faHtml5, faCss3Alt, faNodeJs],
    technologies: [
      "JavaScript",
      "Node.Js",
      "Object Oriented Programming",
      "Authentication",
    ],

    links: {
      linkGitHub: "https://github.com/CarlosSuarezJS20/World-budget-node.js",

      linkPage: "https://fierce-basin-44657.herokuapp.com/login",
    },
  },
  {
    id: 6,
    projectTitle: "Drag and Drop To Do List",
    image: toDoList,
    description1: `Simple but powerful. This app allows users to add their daily tasks, but also segment them into different priorities. They can DRAG and DROP between the different buckets and reactivate done tasks if required.`,
    description2: `I approached this project using OOB, JavaScript Modules, Webpack for code simplification in production. Local storage. Fully RESPONSIVE`,
    languages: [faJsSquare, faHtml5, faCss3Alt],
    technologies: [
      "Object Oriented Programming",
      "JavaScript",
      "CSS",
      "Drag and Drop",
    ],
    links: {
      linkGitHub: "https://github.com/CarlosSuarezJS20/ToDoList-Project-",

      linkPage: "https://interactive-to-do-list.netlify.app/",
    },
  },
  {
    id: 7,
    projectTitle: "Rainbow Sodas UK Ecommerce",
    image: sodasProject,
    description1: `This project allows me to see how different parts of an ecommerce work together and share information to render information and the appropriate elements. Features include: filtering, quantity adjustments, cart display.  `,
    description2: `I approached this project using OOB javaScript architecture. I used this approach to understand the structure and prepare me to emigrate the page to react.js. Fully RESPONSIVE`,
    languages: [faJsSquare, faHtml5, faCss3Alt],
    technologies: [
      "JavaScript",
      "Html",
      "Object Oriented Programming",
      "Cart Feature",
    ],
    links: {
      linkGitHub: "https://github.com/CarlosSuarezJS20/Rainbow-soda-company",

      linkPage: "https://hungry-mayer-dda07d.netlify.app/",
    },
  },

  {
    id: 8,
    projectTitle: "First Portfolio Page",
    image: myPortfolio,
    description1: `The idea behind this project was to create a showcase of all my coding projects for the past year. I tried to keep the UI as simple as possible without any fluff. `,
    description2: `This is a Single Page Application, powered by ROUTING-REACT library and is build with REACT HOOKS. Fully RESPONSIVE`,
    languages: [faReact],
    technologies: ["React", "Grid-CSS", "Hooks"],
    links: {
      linkGitHub:
        "https://github.com/CarlosSuarezJS20/My-Portfolio-Page-React.Version",
    },
  },
  {
    id: 9,
    projectTitle: "Code Wars - Ongoing",
    image: codeWarsImg,
    description1: `Helps me build my problem solving skills and allow me to practice different concepts learned in JavaScript`,
    description2: `We are what we repeatedly do. Excellence then, is not an act, but a habit - Aristotle`,
    languages: [faJsSquare],
    technologies: ["JavaScript"],
    links: {
      linkGitHub: "https://github.com/CarlosSuarezJS20/CodeWar-Challenges",
    },
  },
];

export default projects;
