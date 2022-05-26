const { buildHTML, useRequireComponents } = require('./lib')

useRequireComponents('.html')

const { List } = require('./lib/components')

const Header = require('./components/header.html')
const Profile = require('./components/profile.html')
const About = require('./components/about.html')
const Meta = require('./components/meta.html')

const Formations = require('./components/formations/index.html')
const FormationItem = require('./components/formations/item.html')

const Experiences = require('./components/experiences/index.html')
const ExperienceItem = require('./components/experiences/item.html')

const Courses = require('./components/courses/index.html')
const CourseItem = require('./components/courses/item.html')

const Projects = require('./components/projects/index.html')
const ProjectSection = require('./components/projects/section.html')
const ProjectItem = require('./components/projects/item.html')

const App = require("./screens/app.html")

buildHTML('./index.html', App({ 
    header: Header({}),
    profile: Profile(require('./data/profile.json')),
    about: About(require('./data/about.json')),
    meta: Meta(require('./data/meta.json')),
    formations: List({ 
        component: Formations, 
        data: require('./data/formations.json'),
        item: FormationItem 
    }),
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
