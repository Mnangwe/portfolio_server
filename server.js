
const express = require('express');
const app = express();
const projectRoutes = require('./route/projects.js')
const testimonialRoutes = require('./route/testimonials.js')
const emailRoutes = require('./route/email.js')


const cors = require('cors');

app.use(express.json());
app.use(cors())

app.set('port', process.env.PORT || 3000) 


// Root Path
app.get('/', (req, res, next) =>{
    
    res.send("<h1>Azabenathi Pupuma Portfolio API</h1>");
})

app.use('/projects', projectRoutes);

app.use('/testimonials', testimonialRoutes)

app.use('/contact', emailRoutes)

// Listening On Port
app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})