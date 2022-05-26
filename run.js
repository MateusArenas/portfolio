var fs = require('fs');
require('./lib.js')

  const Projects = require("./components/Projects.js")
  const Courses = require("./components/Courses.js")

  const data_projects = require('./data/projects.js')
  const data_courses = require('./data/courses.js')

  const App = require("./app.html")

async function main ()  {
    try {
        await fs.promises.writeFile('./index.html', App({ 
            projects: Projects({ data: data_projects }), 
            courses: Courses({ data: data_courses })
        }))
    } catch (err) {
        console.log(err);
    }
}

main()
