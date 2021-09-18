import jobly from "../images/jobly1.png";
import microblog from "../images/microblog1.png";
import portfolio from "../images/portfolio1.png";
import jumpOff from "../images/jumpoff1.png";
import warbler from "../images/warbler1.png";
import flixster from "../images/flixster1.png";

let projects = [
  {
    title: "JumpOffCampus",
    technologies: "React • Ruby on Rails",
    description: ``,
    techDetail:``,
    img: jumpOff
  },
  {
    title: "Jobly",
    technologies: "React • Node • Express • PostgreSQL",
    description: `Jobly is a full stack mock job-search application in which 
                  users can login, view companies/jobs, and apply to open 
                  positions.`,
    techDetail:`The frontend uses React Context to manage global state and the 
                backend features a RESTful API with token-based authentication. 
                Integration tests are written with Jest and SuperTest.`,
    img: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Microblog",
    technologies: "React • Redux • Node • Express • PostgreSQL",
    description: `Microblog is a full stack blogging application that allows users 
                  to create blog posts, add comments, and rank posts by votes.`,
    techDetail:`Redux Thunk is used to execute asynchronous API calls, with blog 
                titles and posts stored in separate data structures to optimize 
                loading.`,
    img: microblog,
    link: "http://microblog.surge.sh/",
    github: "https://github.com/paigegodfrey/microblog"
  },
  {
    title: "Warbler",
    technologies: "Flask • Jinja • PostgreSQL",
    description: `Warbler is a mock twitter clone built entirely as a backend application. 
                  Users can sign up/login, follow users, have followers, and create/like 
                  messages (tweets).`,
    techDetail:`Bcrypt authentication is used to manage user login and Flask sessions store 
                current user data to persist state across requests. Tests are written for 
                views and models using Python Unittest.`,
    img: warbler,
    link: "https://warbler-flask-app.herokuapp.com/",
    github: "https://github.com/paigegodfrey/warbler"
  },
  {
    title: "Flixster",
    technologies: "JavaScript • HTML • CSS",
    description: `Flixster is a Vanilla JavaScript movie application in which users 
                  can browse current movies, search titles, and view details, including
                  genre, duration, rating, and description.`,
    techDetail:`Application is styled with pure CSS and features flexbox and grid. Data 
                is sourced from The Movie Database API.`,
    img: flixster,
    link: "https://flixster.netlify.app/",
    github: "https://github.com/paigegodfrey/flixster"
  },
  {
    title: "Portfolio",
    technologies: "React • React-Bootstrap",
    description: `The portfolio site you are on!`,
    techDetail:`Built from scratch with a responsive, mobile-first design, utilizing 
                React-Bootstrap and custom CSS.`,
    img: portfolio,
    github: "https://github.com/paigegodfrey/portfolio-2"
  },
]

export default projects;