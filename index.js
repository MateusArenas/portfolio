
const Projects = require('./components/Projects')
const Courses = require('./components/Courses')

$(document).ready(async function() {

    $("#about").append(await Projects({ data: await required("./data/projects.json") }))
    $("#about").append(await Courses({ data: await required("./data/courses.json") }))
  
});