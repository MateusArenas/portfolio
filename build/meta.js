const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')
const Meta = require('../components/meta.html')

const Index = require("../screens/index.html")

buildHTML('./meta.html', Index({ 
    header: Header({ metaStyle: "color: blue;" }),
    profile: Profile(require('../data/profile.json')),
    meta: Meta(require('../data/meta.json')),
}))