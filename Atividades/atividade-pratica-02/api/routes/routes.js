let Router = require("express").Router();
var subjectController = require("../controller/subjectController");
var userController = require("../controller/userController");
var requestController = require("../controller/requestController");

Router.get("/", function (req, res) {
  res.json({
    status: "WORKING",
    message: "/api route",
  });
});

Router.route("/subjects")
  .get(subjectController.index)
  .post(subjectController.new);

Router.route("/subject/:subject_id")
  .get(subjectController.view)
  .put(subjectController.update)
  .delete(subjectController.delete);

Router.route("/users").get(userController.index).post(userController.new);

Router.route("/user/:user_id")
  .get(userController.view)
  .put(userController.update)
  .delete(userController.delete);

Router.route("/login").post(userController.login);

Router.route("/requests")
  .get(requestController.index)
  .post(requestController.new);

Router.route("/request/:request_id")
  .get(requestController.view)
  .put(requestController.update)
  .delete(requestController.delete);

module.exports = Router;
