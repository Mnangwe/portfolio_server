module.exports = app => {

  const controller = require("../controllers/project.controller.js");

  let router = require("express").Router();

  router.post("/", controller.create);
  router.get("/", controller.findAll);
  router.get("/:id", controller.findOne);
  router.put("/:id", controller.updateOne);
  router.delete("/:id", controller.delete);

  app.use("/api/projects", router)
}