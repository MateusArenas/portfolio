const ProjectList = require("../templates/projects/index.html")
const ProjectSection = require("../templates/projects/section.html")
const ProjectItem = require("../templates/projects/item.html")

function Projects ({ data }) {
    
    const childrens = data.map(section => section.map(props => ProjectItem({ ...props })))
    
    return ProjectList({ 
        children: childrens.map(props => ProjectSection({ ...props }))
    });
}

module.exports = Projects;