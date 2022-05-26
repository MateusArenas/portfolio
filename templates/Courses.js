const CourseList = require("../components/courses/index.html")
const CourseItem = require("../components/courses/item.html")

function Courses ({ data }) {
    
    return CourseList({ 
        children: data.map(props => CourseItem({ ...props })) 
    });
}

module.exports = Courses;