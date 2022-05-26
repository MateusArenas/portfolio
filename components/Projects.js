async function Projects ({ data }) {
    const ProjectList = await required("./templates/projects/index.html")
    const ProjectSection = await required("./templates/projects/section.html")
    const ProjectItem = await required("./templates/projects/item.html")
    
    const childrens = data.map(section => section.map(props => ProjectItem({ ...props })))
    
    return ProjectList({ 
        children: childrens.map(props => ProjectSection({ ...props }))
    });
}

export default  Projects;
