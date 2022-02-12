const express = require('express');
const router = express.Router();

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
        image:"https://i.postimg.cc/XJNtn60Z/Alex.jpg"
    },
    {
        id:2,
        fname: "Jason Wandrag",
        email: "jason@lifechoices.co.za",
        content: `Azabenathi has already developed a programmer mindset and 
                is alwaiestestimonies learning as much as he can. He has also shown to work 
                extremely well in teams and transforms into a natural leader. 
                Azabenathi is well on his way to becoming a great developer.`,
        title:"Lecturer",
        image:"https://i.postimg.cc/MZvr5DZ8/Json.jpg"
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
        image:"https://i.postimg.cc/7Z7NJJZ0/godwin-2022.jpg"
    },
    {   id:4,
        fname: "Nomvuyiseko Mpofu",
        email: "nomvuyisekompofu@gmail.com",
        content: `Azabenathi is a very creative developer, 
                 he has so far produced the best work in class. 
                 His work ethic is impressive and he alwaiestestimonies goes out of his way to help 
                 others. I love his working style, he is driven and dedicated.`,
        title:"Collegue & Front-end Developer",
        image:"https://i.postimg.cc/HxBDMst4/Nomvuyiseko.jpg"
    },
    {
        id:5,
        fname: "Kagiso Mphayi",
        email: "mphayi96@gmail.com",
        content: `Azabenathi is a Hard working individual who's 
                 alwaiestestimonies eager to expand his knowledge. He likes helping people 
                 and he is a great leader as well.`,
        title:"Collegue & Full-stack Developer",
        image:"https://i.postimg.cc/nzvMf7pV/Kagiso.jpg"
    },
]

// CREATE testimonial
router.post('/', (req, res) => {
    const { image, fname,
        title,
        email,
        content } = req.body
    //if(!title || !image || !fname || !email) res.status(404).send('<h1>Please fill up all the missing spaces</h1>')
    const testimonial ={
      id: testimonials.length +1,
      image, title, email, fname, content
    };
    testimonials.push(testimonial);
    res.send(testimonial)
  })
  
  // GET testimonialS
  router.get('/', (req, res) => {
    res.send(testimonials)
  })
  
  //GET ONE testimonial
  router.get('/:id', (req, res) => {
    const testimony = testimonies.find(elem => elem.id === parseInt(req.params.id))
    if(!testimony) res.send(404).send("<h1>Testimony not found</h1>")
    res.send(testimony)
  })
  
  // UPDATE testimony
  router.put('/:id', (req, res) => {
    const { image, fname, title, email, content } = req.body
    const testimony = testimonies.find(elem => elem.id === parseInt(req.params.id))
    if(!testimony) res.status(404).send("We can not find this testimony")
    
    if(title) testimony.title = title
    if(fname) testimony.fname = fname
    if(email) testimony.email = email
    if(image) testimony.image = image
    if(content) testimony.content = content

    res.send(testimony)
  })
  
  // DELETE testimonial
  router.delete('/:id', (req, res) => {
    const testimonial = testimonials.find(elem => elem.id === parseInt(req.params.id))
      if(!testimonial) res.status(404).send("We can not find this testimonial")


      
      const index = testimonials.indexOf(testimonial);
      testimonials.splice(index,1);
      
      testimonials = testimonials.filter(testimonial => testimonial.id != req.params.id)
      res.send(testimonials)
  
  })
  


module.exports = router;