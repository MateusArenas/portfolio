const { buildHTML, useRequireComponents } = require('../lib')

useRequireComponents('.html')

const { List } = require('../lib/components')

const Header = require('../components/header.html')
const Profile = require('../components/profile.html')

const Courses = require('../components/courses/index.html')
const CourseItem = require('../components/courses/item.html')

const Index = require("../screens/index.html")

buildHTML('./courses.html', Index({ 
    header: Header({ qualyStyle: "color: blue;" }),
    profile: Profile(require('../data/profile.json')),
    courses: List({ 
        component: Courses, 
        data: require('../data/courses.json'),
        item: CourseItem 
    }) 
}))