async function Projects () {
    const multidata = await require("./data/projects.json")
    
    const ProjectList = await require("./templates/projects/index.html")
    const ProjectSection = await require("./templates/projects/section.html")
    const ProjectItem = await require("./templates/projects/item.html")
    
    const childrens = multidata.map(data => data.map(props => ProjectItem({ ...props })))
    
    return ProjectList({ 
        children: childrens.map(props => ProjectSection({ ...props }))
    });
}
