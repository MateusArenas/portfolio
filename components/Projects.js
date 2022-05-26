async function Projects ({ data }) {
    const ProjectList = await require("./templates/projects/index.html")
    const ProjectSection = await require("./templates/projects/section.html")
    const ProjectItem = await require("./templates/projects/item.html")
    
    const childrens = data.map(section => section.map(props => ProjectItem({ ...props })))
    
    return ProjectList({ 
        children: childrens.map(props => ProjectSection({ ...props }))
    });
}
