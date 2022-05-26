
$(document).ready(async function() {

    $("#about").append(await Projects({ data: projects }))
    $("#about").append(await Courses({ data: courses }))
  
});