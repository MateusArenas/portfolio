const ProjectList = require("../components/projects/index.html")
const ProjectSection = require("../components/projects/section.html")
const ProjectItem = require("../components/projects/item.html")

function Projects ({ data }) {
    
    const childrens = data.map(section => section.map(props => ProjectItem({ ...props })))
    
    return ProjectList({ 
        children: childrens.map(props => ProjectSection({ ...props }))
    });
}

module.exports = Projects;