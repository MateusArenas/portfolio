async function Courses () {
    const data = await getData("./data/courses.json")

    const list = await require("./templates/courses/index.html")
    const item = await require("./templates/courses/item.html")

    const children = data.map(props => buildComponent(item, props)).join('')

    const courses = await buildComponent(list, { children });

    $("#about").append(courses)
  }