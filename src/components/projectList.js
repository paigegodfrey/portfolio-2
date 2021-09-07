import jobly from "../images/jobly.png";
import microblog from "../images/microblog.png";
import flixster from "../images/flixster2.png";
import warbler from "../images/warbler.png";

let projects = [
  {
    title: "Jobly",
    technologies: "React • Node/Express • PostgreSQL",
    description: `Jobly is a full-stack mock job-search application in which users can login, view companies/jobs,
                  and apply to open positions. The backend features a RESTful API with token-based authentication
                  and the frontend uses React Context to manage global state. Integration tests are written with Jest
                  and SuperTest.`,
    utilizes: "Utilizes: React, React Context, Node, Express, JSON Web Tokens, Bcrypt, Jest, SuperTest, PostgreSQL.",
    img: jobly,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Microblog",
    technologies: "React • Redux • Node/Express • PostgreSQL",
    description: `Microblog is a full-stack blogging application that allows users to create blog posts, add comments,
                  and rank posts by votes. Redux Thunk is used to execute asynchronous API calls, with blog titles and
                  posts stored in separate data structures to optimize loading.`,
    utilizes: "Utilizes: React, React Hooks, Redux, Redux Thunk, Bootstrap, Node, Express, and PostgreSQL.",
    img: microblog,
    link: "http://microblog.surge.sh/",
    github: "https://github.com/paigegodfrey/microblog"
  },
  {
    title: "Flixster",
    technologies: "React • Node/Express • PostgreSQL",
    description: `Jobly is a full-stack mock job-search application in which users can login, view companies/jobs,
                  and apply to open positions. The backend features a RESTful API with token-based authentication
                  and the frontend uses React Context to manage global state. Integration tests are written with Jest
                  and SuperTest.`,
    utilizes: "Utilizes: React, React Context, Node, Express, JSON Web Tokens, Bcrypt, Jest, SuperTest, PostgreSQL.",
    img: flixster,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
  {
    title: "Warbler",
    technologies: "React • Node/Express • PostgreSQL",
    description: `Jobly is a full-stack mock job-search application in which users can login, view companies/jobs,
                  and apply to open positions. The backend features a RESTful API with token-based authentication
                  and the frontend uses React Context to manage global state. Integration tests are written with Jest
                  and SuperTest.`,
    utilizes: "Utilizes: React, React Context, Node, Express, JSON Web Tokens, Bcrypt, Jest, SuperTest, PostgreSQL.",
    img: warbler,
    link: "http://jobly-build.surge.sh/",
    github: "https://github.com/paigegodfrey/jobly"
  },
]

export default projects;