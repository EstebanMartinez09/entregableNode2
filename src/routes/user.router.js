const express = require("express");
const { getAll, getOne, create, destroy, update } = require("../controllers/user.controllers");

const usersRouter = express.Router();

//fijas
usersRouter.route("/")
    .get(getAll)
    .post(create);

//dinamicas
usersRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = usersRouter;
