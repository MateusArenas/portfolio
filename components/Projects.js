var Projects = async () => {
    const multidata = await getData("./data/projects.json")

    const list = await require("./templates/projects/index.html")
    const section = await require("./templates/projects/section.html")
    const item = await require("./templates/projects/item.html")

    const childrens = multidata.map(data => data.map(props => buildComponent(item, { ...props })))
    
    const children = childrens.map(props => buildComponent(section, { ...props })).join('')

    const courses = await buildComponent(list, { children });

    $("#about").append(courses)
}