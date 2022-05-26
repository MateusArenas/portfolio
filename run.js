const { buildHTML } = require('./lib.js')

const Projects = require("./components/Projects.js")
const Courses = require("./components/Courses.js")

const App = require("./app.html")

buildHTML('./index.html', App({ 
    projects: Projects({ data: require('./data/projects.json') }), 
    courses: Courses({ data: require('./data/courses.json') })
}))
