async function Course (props) {
    const item = await require("./templates/courses/item.html")

    return render(item, props)
}


async function Courses () {
    const data = await require("./data/courses.json")

    const list = await require("./templates/courses/index.html")

    const children = data.map(props => Course(props)).join('')

    return render(list, { children });
}