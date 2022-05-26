const CourseList = require("../templates/courses/index.html")
const CourseItem = require("../templates/courses/item.html")

function Courses ({ data }) {
    
    return CourseList({ 
        children: data.map(props => CourseItem({ ...props })) 
    });
}

module.exports = Courses;