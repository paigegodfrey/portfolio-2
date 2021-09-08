import jobly from "../images/jobly1.png";
import microblog from "../images/microblog1.png";
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
    title: "Flixster",
    technologies: "Vanilla JavaScript • HTML • CSS",
    description: `Flixster is a Vanilla JavaScript movie application in which users 
                  can search titles and view movie details, including genre, duration, 
                  rating, and description.`,
    techDetail: `Application is built with pure CSS and features flexbox and grid. Data 
                  is sourced from The Movie Database API.`,
    img: flixster,
    link: "https://flixster.netlify.app/",
    github: "https://github.com/paigegodfrey/flixster"
  },
]

export default projects;