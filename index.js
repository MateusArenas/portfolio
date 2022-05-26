
const Projects = require('./components/Projects.js')
const Courses = require('./components/Courses.js')

const projects = require("./data/projects.js")
const courses = require("./data/courses.js")

$(document).ready(async function() {

    $("#about").append(await Projects({ data: projects }))
    $("#about").append(await Courses({ data: courses }))
  
});