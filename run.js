const fs = require('fs');

  

  const { required, buildProps, get, render } = require("./utils.js")

  const Projects = require("./components/Projects.js")
  const Courses = require("./components/Courses.js")

  const data_projects = require('./data/projects.js')
  const data_courses = require('./data/courses.js')

async function main ()  {
    try {
        
    
        const projects = await Projects({ data: data_projects })
        const courses = await Courses({ data: data_courses })

        const App = await required("./app.html")

        console.log(App({})?.length, App({  projects, courses })?.length);
        console.log({ projects: typeof projects, courses:typeof courses });
        // console.log(App({ projects, courses }));
    
        await fs.promises.writeFile('./index.html', App({ projects, courses }))
    } catch (err) {
        console.log(err);
    }
}

main()
