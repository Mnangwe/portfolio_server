
const express = require('express');
const app = express();
const testimonialRoutes = require('./route/testimonials.js')
const emailRoutes = require('./route/email.js')


const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000) 

const db = require("./models");

db.mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.error("Cannot connect to the database!", err);
        process.exit();
    })


// Root Path
app.get('/', (req, res, next) =>{
    
    res.send("<h1>Azabenathi Pupuma Portfolio API</h1>");
})

require("./route/projects.router")(app)

app.use('/testimonials', testimonialRoutes)

app.use('/contact', emailRoutes)

// Listening On Port
app.listen(app.get('port'), server =>{
    console.info(`Server listen on port ${app.get('port')}`);
})