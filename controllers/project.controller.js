const db = require("../models");
const Project = db.projects;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({ msg: 'Content can not be empty!' });
        return;
    }

    const project = new Project(
        req.body
    );

    project
        .save(project)
        .then(data => {
            res.status(201).send(data);
        })
        .catch(err => res.status(500).send({ msg: err.message }));
}

exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { $regex: new RegExp(title), $options: 'i'}} : {};

    Project.find(condition)
        .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send({ msg: err.message }));
}

exports.findOne = (req, res) => {
    const id = req.param.id;

    Project.findById(id)
        .then(data => {
            if(!data){
                return res.status(404).send({ msg: `Cannot findd Project with id = ${id}. Maybe it was deleted!`});
            }
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ msg: err.message })
        })
}

exports.updateOne = (req, res) => {
    if (!req.body){
        return res.status(400).send({
            msg: "You did not add anything to update!"
        })
    }

    const id = req.param.id;

    Project.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data){
                res.status(404).send({
                    msg: `Cannot update Project with id = ${id}. Maybe the Project was deleted.`
                })
                return;
            }
            res.status(200).send({ msg: "The project is updated successfully!"});
        })
        .catch(err => {
            res.status(500).send({ msg: err.message });
        })
}

exports.delete = (req, res) => {
    const id = req.param.id;

    Project.findByIdAndRemove(id)
        .then(data => {
            if (!data){
                res.status(404).send({
                    msg: `Cannot delete Project with id = ${id}. Maybe the project is already deleted.`
                })
                return;
            }
            res.status(200).send({ msg: "The project was deleted successfully!"})
        })
        .catch(err => {
            res.status(500).send({ msg: err.message })
        })
}