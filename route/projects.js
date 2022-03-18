const express = require('express');
const router = express.Router();

let projects = [
    {
      id:1,
      image:"https://i.postimg.cc/Y268bscZ/reaction-timer.jpg",
      title: "Reaction Timer",
      gitHub: "https://github.com/Mnangwe/Reaction_timer",
      netlify: "https://reaction-time-aza.netlify.app",
      description:`Vue-3 project, a game that returns time depending how fast you reacted to click on the box.`
    },
    {
      id:2,
      image:"https://i.postimg.cc/c4WkWNMd/calculator.jpg",
      title: "Calculator",
      gitHub: "https://github.com/Mnangwe/JS_Calculator",
      netlify: "https://aza-calculator-pupuma.netlify.app",
      description:`Basic Vanilla Javascript Calculator with basic Math operators.`
    },
    {
      id:3,
      image:"https://i.postimg.cc/T37tn58P/book-ecommerce.jpg",
      title: "Book Store",
      gitHub: "https://github.com/Mnangwe/Book_Store",
      netlify: "https://book-e-commerce.netlify.app",
      description:`A book store created with Javascript using LocalStorage to store data and perform CRUD opperations.`
    },
    {
      id:4,
      image:"https://i.postimg.cc/wvKckhw9/project1.jpg",
      title: "Random project Search",
      gitHub: "https://github.com/Mnangwe/Vue_CDN-Randomproject",
      netlify: "https://random-project-fetch-api.netlify.app",
      description:`Vue CDN using fetch function to fetch data of a random project on an API.`
    },
    {
      id:5,
      image:"https://i.postimg.cc/BbThFhsW/stopwatch.jpg",
      title: "Stopwatch",
      gitHub: "https://github.com/Mnangwe/stopwatch-freeCodeCamp",
      netlify: "https://azabenathi-stopwatch.netlify.app/",
      description:`Work in progress-time-project. Stopwatch created with JavaScript and HTML only, in future we will add timer and worl clock`
    },
    {
      id:6,
      image:"https://i.postimg.cc/GptSfJPY/age-Temp-Calculator.jpg",
      title: "Age & Temperature calculator",
      gitHub: "https://github.com/Mnangwe/age-temp-calculator",
      netlify: "https://aza-age-temp.netlify.app/",
      description:`Work in progress. JavaScript project to calculator the age using current time and converting temperature from Celsius to Fahrenheit`
    },
    {
      id:7,
      image:"https://i.postimg.cc/rppy4CBy/2048-clone.jpg",
      title: "2048 Clone",
      gitHub: "https://github.com/Mnangwe/2048_clone",
      netlify: "https://2048-aza-clone.netlify.app/",
      description:`An intermidiate project. It is a game that works in a powers of 2, it is played by moving left &#8592;, up &#8593;, right &#8594;, down &#8595;`
    },
    {
      id:8,
      image:"https://i.postimg.cc/7YFqBJ5D/generic-blog.jpg",
      title: "Generic Blog",
      gitHub: "https://github.com/Mnangwe/Blog_MongoDB",
      netlify: "https://generic-blog-vue.netlify.app/",
      description:`A generic blog that allows a user to register, login and post a blog about anything. W. I. P`
    },
  ]

function fixArrayID(arr){
  return arr.forEach((element, index) => element.id = index + 1);
}
// CREATE PROJECT
router.post('/', (req, res) => {
  const { image, title, gitHub, netlify, description } = req.body
  if(!title || !image || !netlify || !gitHub) res.status(404).send('<h1>Please fill up all the missing spaces</h1>')
  const project ={
    id: projects.length +1,
    image, title, gitHub, netlify, description
  };
  projects.push(project);
  res.send(project)
})

// GET PROJECTS
router.get('/', (req, res) => {
  res.send(projects)
})

//GET ONE PROJECT
router.get('/:id', (req, res) => {
  const project = projects.find(elem => elem.id === parseInt(req.params.id))
  if(!project) res.send(404).send("<h1>Project not found</h1>")
  res.send(project)
})

// UPDATE PROJECT
router.put('/:id', (req, res) => {
  const { image, gitHub, title, netlify, description} = req.body
    const project = projects.find(elem => elem.id === parseInt(req.params.id))
    if(!project) res.status(404).send("We can not find this project")
    
    if(title) project.title = title
    if(gitHub) project.gitHub = gitHub
    if(netlify) project.netlify = netlify
    if(image) project.image = image
    if(description) project.description = description

    res.send(project)
})

// DELETE PROJECT
router.delete('/:id', (req, res) => {
  // const project = projects.find(elem => elem.id === parseInt(req.params.id))
  //   if(!project) res.status(404).send("We can not find this project")
    
  //   const index = projects.indexOf(project);
  //   projects.splice(index,1);
  //   fixArrayID(projects)
  //   res.send(projects)
    projects = projects.filter(project => project.id != req.params.id)
    fixArrayID(projects)
    res.send(`Project deleted`)
})


module.exports = router;