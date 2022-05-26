async function Courses ({ data }) {
    const CourseList = await require("./templates/courses/index.html")
    const CourseItem = await require("./templates/courses/item.html")
    
    return CourseList({ 
        children: data.map(props => CourseItem(props)) 
    });
}
