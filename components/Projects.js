async function ProjectSection (props) {
    const section = await require("./templates/projects/section.html")

    return render(section, props)
}

async function ProjectItem (props) {
    const item = await require("./templates/projects/item.html")

    return render(item, props)
}

async function Projects () {
    const multidata = await require("./data/projects.json")

    const list = await require("./templates/projects/index.html")

    const childrens = multidata.map(data => data.map(props => ProjectItem({ ...props })))
    
    const children = childrens.map(props => ProjectSection({ ...props })).join('')

    return render(list, { children });
}