const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.set('port', process.env.PORT || 3400) 
app.use(bodyparser.json());
// Root Path
app.get('/', (req, res, next) =>{
    
    res.send('<h1>Hello world<h1>');
})

app.get('/projects', (req, res, next) =>{
    
    let projects = [
        {
          id:1,
          image:"./images/projects/reaction-timer.jpg",
          title: "Reaction Timer",
          gitHub: "https://github.com/Mnangwe/Reaction_timer",
          netlify: "https://reaction-time-aza.netlify.app",
          description:`Vue-3 project, a game that returns time depending how fast you reacted to click on the box.`
        },
        {
          id:2,
          image:"./images/projects/calculator.jpg",
          title: "Calculator",
          gitHub: "https://github.com/Mnangwe/JS_Calculator",
          netlify: "https://aza-calculator-pupuma.netlify.app",
          description:`Basic Vanilla Javascript Calculator with basic Math operators.`
        },
        {
          id:3,
          image:"./images/projects/book-ecommerce.jpg",
          title: "Book Store",
          gitHub: "https://github.com/Mnangwe/Book_Store",
          netlify: "https://book-e-commerce.netlify.app",
          description:`A book store created with Javascript using LocalStorage to store data and perform CRUD opperations.`
        },
        {
          id:4,
          image:"./images/projects/project1.jpg",
          title: "Random User Search",
          gitHub: "https://github.com/Mnangwe/Vue_CDN-RandomUser",
          netlify: "https://random-user-fetch-api.netlify.app",
          description:`Vue CDN using fetch function to fetch data of a random user on an API.`
        },
        {
          id:5,
          image:"./images/projects/stopwatch.jpg",
          title: "Stopwatch",
          gitHub: "https://github.com/Mnangwe/stopwatch-freeCodeCamp",
          netlify: "https://azabenathi-stopwatch.netlify.app/",
          description:`Work in progress-time-project. Stopwatch created with JavaScript and HTML only, in future we will add timer and worl clock`
        },
        {
          id:6,
          image:"./images/projects/ageTempCalculator.jpg",
          title: "Age & Temperature calculator",
          gitHub: "https://github.com/Mnangwe/age-temp-calculator",
          netlify: "https://aza-age-temp.netlify.app/",
          description:`Work in progress. JavaScript project to calculator the age using current time and converting temperature from Celsius to Fahrenheit`
        },
      ]
    
    let data = JSON.stringify(projects)
    
    res.send(data);
})
app.get('/testimonials', (req, res, next) =>{

  let testimonials = [
    {
        id:1,
        fname: "Alex Sexwale",
        title: "Lecturer",
        email: "alex@lifechoices.co.za",
        content: `He is an oustanding developer who goes 
                 the extra mile to completing beyond what is required 
                 by him. He will assist his peers when they are struggling 
                 and wants to demonstrate what he has just learnt.`,
        image:"./images/portfolio/Alex.jpg"
    },
    {
        id:2,
        fname: "Jason Wandrag",
        email: "jason@lifechoices.co.za",
        content: `Azabenathi has already developed a programmer mindset and 
                is always learning as much as he can. He has also shown to work 
                extremely well in teams and transforms into a natural leader. 
                Azabenathi is well on his way to becoming a great developer.`,
        title:"Lecturer",
        image:"./images/portfolio/Json.jpg"
    },
    {
        id:3,
        fname: "Godwin Dzvapatsva",
        email: "godwin@lifechoices.co.za",
        content: `Seldom have I been able to recommend someone without reservation. 
                 It is my pleasure to do so in the case of Azabenathi Pupuma for any IT 
                 organisation. Azabenathi has a strong passion for coding and his attention 
                 to detail is exceptional. Azabenathi is one of our finest and most well-rounded 
                 student at Lifechoices Academy.`,
        title:"Head of Curriculum & Learning",
        image:"./images/portfolio/godwin-2022.jpg"
    },
    {   id:4,
        fname: "Nomvuyiseko Mpofu",
        email: "nomvuyisekompofu@gmail.com",
        content: `Azabenathi is a very creative developer, 
                 he has so far produced the best work in class. 
                 His work ethic is impressive and he always goes out of his way to help 
                 others. I love his working style, he is driven and dedicated.`,
        title:"Collegue & Front-end Developer",
        image:"./images/portfolio/Nomvuyiseko.jpg"
    },
    {
        id:5,
        fname: "Kagiso Mphayi",
        email: "mphayi96@gmail.com",
        content: `Azabenathi is a Hard working individual who's 
                 always eager to expand his knowledge. He likes helping people 
                 and he is a great leader as well.`,
        title:"Collegue & Full-stack Developer",
        image:"./images/portfolio/Kagiso.jpg"
    },
]

  let data = JSON.stringify(testimonials)
    
    res.send(data);
})

// Listening On Port
app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})