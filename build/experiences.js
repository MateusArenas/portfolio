const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const { List } = require('../lib/components')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')

const Experiences = require('../components/experiences/index.html')
const ExperienceItem = require('../components/experiences/item.html')

const Index = require("../screens/index.html")

buildHTML('./experiences.html', Index({ 
    header: Header({}),
    profile: Profile(require('../data/profile.json')),
    experiences: List({ 
        component: Experiences, 
        data: require('../data/experiences.json'),
        item: ExperienceItem 
    }) 
}))