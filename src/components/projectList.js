import jobly from "../images/jobly1.png";
import microblog from "../images/microblog1.png";
import warbler from "../images/warbler1.png";
import jumpOff from "../images/jumpoff1.png";
import numbers from "../images/numbers1.png";
import flixster from "../images/flixster1.png";

let projects = [
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
    title: "JumpOffCampus",
    technologies: "React • Ruby on Rails",
    description: `JumpOffCampus enables students to find off-campus housing solutions in 
                  their community.`,
    techDetail:`During my internship, I worked primarily in React to refactor legacy 
                components from classes to hooks and improve the apartment listings UI 
                by separating list and map views and integrating Google Maps API. I also 
                built and tested MVC components for “points of interest” feature, as part 
                of an upgrade from Rails 2 to Rails 5.`,
    img: jumpOff,
  },
  {
    title: "Numbers API",
    technologies: "JavaScript • Node • Express",
    description: `Numbers API provides interesting facts about numbers.`,
    techDetail:`As an open-source contributor, I removed Ruby dependencies and translated 
                code to use Node.js ecosystem; relegated frontend libraries to package 
                dependencies; refactored the codebase with JavaScript ES6; and updated 
                documentation for new contributors.`,
    img: numbers,
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
]

export default projects;