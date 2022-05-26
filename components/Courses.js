async function Courses ({ data }) {
    const CourseList = await required("./templates/courses/index.html")
    const CourseItem = await required("./templates/courses/item.html")
    
    return CourseList({ 
        children: data.map(props => CourseItem({ ...props })) 
    });
}

module.exports = Courses;
