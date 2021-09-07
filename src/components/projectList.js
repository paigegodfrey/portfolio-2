import jobly from "../images/jobly.png";
import microblog from "../images/microblog.png";
import flixster from "../images/flixster.png";

let projects = [
  {
    title: "Jobly",
    description: `Jobly is a full-stack mock job-search application in which users can login, view companies/jobs,
                  and apply to open positions. The backend features a RESTful API with token-based authentication
                  and the frontend uses React Context to manage global state. Integration tests are written with Jest
                  and SuperTest.`,
    technologies: "Utilizes: React, React Context, Node, Express, JSON Web Tokens, Bcrypt, Jest, SuperTest, PostgreSQL.",
    img: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Microblog",
    description: `Microblog is a full-stack blogging application that allows users to create blog posts, add comments,
                  and rank posts by votes. Redux Thunk is used to execute asynchronous API calls, with blog titles and
                  posts stored in separate data structures to optimize loading.`,
    technologies: "Utilizes: React, React Hooks, Redux, Redux Thunk, Bootstrap, Node, Express, and PostgreSQL.",
    img: microblog,
    link: "http://microblog.surge.sh/",
    github: "https://github.com/paigegodfrey/microblog"
  },
  {
    title: "Flixster",
    description: "",
    technologies: "",
    img: flixster,
    link: "",
    github: ""
  },
]

export default projects;