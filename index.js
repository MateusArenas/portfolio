
const Projects = require('./components/Projects')
const Courses = require('./components/Courses')

const projects = require("./data/projects.json")
const courses = require("./data/courses.json")

$(document).ready(async function() {

    $("#about").append(await Projects({ data: projects }))
    $("#about").append(await Courses({ data: courses }))
  
});