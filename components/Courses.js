async function Courses () {
    const data = await require("./data/courses.json")

    const CourseList = await require("./templates/courses/index.html")

    const CourseItem = await require("./templates/courses/item.html")
    
    return CourseList({ 
        children: data.map(props => CourseItem(props)) 
    });
}
