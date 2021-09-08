import jobly from "../images/jobly1.png";
import microblog from "../images/microblog1.png";
import flixster from "../images/flixster1.png";

let projects = [
  {
    title: "Jobly",
    description: `Jobly is a fullstack mock job-search application in which users can login, view companies/jobs,
                  and apply to open positions.`,
    technologies: "Utilizes: React, React Context, Node, Express, JSON Web Tokens, Bcrypt, Jest, SuperTest, PostgreSQL.",
    img: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Microblog",
    description: `Microblog is a fullstack blogging application that allows users to create blog posts, add comments,
                  and rank posts by votes.jobly`,
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