const express = require('express');
const usersRouter = require('./user.router');
const router = express.Router();

router.use("/users", usersRouter)

module.exports = router;