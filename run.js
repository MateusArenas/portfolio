const { buildHTML, useRequireComponents } = require('./lib')

useRequireComponents('.html')

const { List } = require('./lib/components')

const Experiences = require('./components/experiences/index.html')
const ExperienceItem = require('./components/experiences/item.html')

const Courses = require('./components/courses/index.html')
const CourseItem = require('./components/courses/item.html')

const Projects = require('./components/projects/index.html')
const ProjectSection = require('./components/projects/section.html')
const ProjectItem = require('./components/projects/item.html')

const App = require("./components/app.html")

buildHTML('./index.html', App({ 
    experiences: List({ 
        component: Experiences, 
        data: require('./data/experiences.json'),
        item: ExperienceItem 
    }),
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
