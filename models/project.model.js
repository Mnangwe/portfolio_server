module.exports = mongoose => {
    const schema = mongoose.Schema({
        image: String,
        title: String,
        github: String,
        hosted: String,
        description: String,
     },
     { timestamps: true }
    );

    schema.method("toJSON", function(){
        const { __v, _id, ...object } = this.toObject();
        object.id = _id
        return object
    })

    const Project = mongoose.model("project", schema);
    return Project
};


/*
    {
      id:1,
      image:"https://i.postimg.cc/Y268bscZ/reaction-timer.jpg",
      title: "Reaction Timer",
      gitHub: "https://github.com/Mnangwe/Reaction_timer",
      netlify: "https://reaction-time-aza.netlify.app",
      description:`Vue-3 project, a game that returns time depending how fast you reacted to click on the box.`
    },


*/