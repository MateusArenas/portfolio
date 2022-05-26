
import Projects from './components/Projects.js';
import Courses from './components/Courses.js';

import projects from "./data/projects.js";
import courses from "./data/courses.js";

$(document).ready(async function() {

    $("#about").append(await Projects({ data: projects }))
    $("#about").append(await Courses({ data: courses }))
  
});