const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const { List } = require('../lib/components')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')

const Projects = require('../components/projects/index.html')
const ProjectSection = require('../components/projects/section.html')
const ProjectItem = require('../components/projects/item.html')

const Index = require("../screens/index.html")

buildHTML('./portfolio.html', Index({ 
    header: Header({ portStyle: "color: blue;" }),
    profile: Profile(require('../data/profile.json')),
    projects: List({ 
        component: Projects, 
        section: ProjectSection,
        colluns: 3,
        data: require('../data/projects.json'),
        item: ProjectItem 
    }), 
}))