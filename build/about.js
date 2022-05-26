const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')
const About = require('../components/about.html')

const Index = require("../screens/index.html")

buildHTML('./about.html', Index({ 
    header: Header({ aboutStyle: "color: blue;" }),
    profile: Profile(require('../data/profile.json')),
    about: About(require('../data/about.json')),
}))