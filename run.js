const { buildHTML } = require('./lib')
const { List } = require('./lib/components')

const Courses = require('./components/courses/index.html')
const CourseItem = require('./components/courses/item.html')

const Projects = require('./components/projects/index.html')
const ProjectSection = require('./components/projects/section.html')
const ProjectItem = require('./components/projects/item.html')


const App = require("./app.html")

buildHTML('./index.html', App({ 
    projects: List({ 
        component: Projects, 
        section: ProjectSection,
        colluns: 3,
        data: require('./data/projects.json'),
        item: ProjectItem 
    }), 
    courses: List({ 
        component: Courses, 
        data: require('./data/courses.json'),
        item: CourseItem 
    })
}))
