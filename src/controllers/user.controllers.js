const catchError = require("../utils/catchError");
const User = require("../models/User.js");

// llamando todos los usuarios
const getAll = catchError(async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
});

// creando un usuario
const create = catchError(async (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body;
  const newBody = { first_name, last_name, email, password, birthday };

  const user = await User.create(newBody);
  return res.status(201).json(user);
});

// seleccionando un usuario
const getOne = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) res.sendStatus(404);
  return res.json(user);
});

// eliminando un usuario
const destroy = catchError(async (req, res) => {
  const { id } = req.params;
  const user = await User.destroy({
    where: { id },
  });
  if (!user) res.sendStatus(404);
  return res.send("Delete user").sendStatus(204);
});

//actualizando usuario
const update = catchError(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, password } = req.body;
  const newBody = { first_name, last_name, password } 

  const user = await User.findByPk(id)
  if (!user) res.sendStatus(404)

  const userUpdate = await User.update(
    newBody,
    {
        where: {id},
        returning : true
    }
  )

  return res.json(userUpdate[1][0])
});

module.exports = {
  getAll,
  getOne,
  create,
  destroy,
  update
};
