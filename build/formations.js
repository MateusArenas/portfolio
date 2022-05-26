const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const { List } = require('../lib/components')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')

const Formations = require('../components/formations/index.html')
const FormationItem = require('../components/formations/item.html')

const Index = require("../screens/index.html")

buildHTML('./formations.html', Index({ 
    header: Header({ formStyle: "color: blue;" }),
    profile: Profile(require('../data/profile.json')),
    formations: List({ 
        component: Formations, 
        data: require('../data/formations.json'),
        item: FormationItem 
    }) 
}))