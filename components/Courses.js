async function CourseItem (props) {
    const item = await require("./templates/courses/item.html")

    return render(item, props)
}


async function Courses () {
    const data = await require("./data/courses.json")

    const list = await require("./templates/courses/index.html")

    const children = await Promise.all(data.map(props => CourseItem(props))).join('')

    return render(list, { children });
}