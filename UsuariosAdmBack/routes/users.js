var express = require('express');
var router = express.Router();
const usuarios = require("../controllers/usuarios.controller.js");
const authorize = require('../_helpers/authorize')
const Role = require('../_helpers/role');

// Crea nuevo Usuario
router.post("/",  authorize(Role.Admin), usuarios.create);

// Busca todos los Usuarios
router.get("/",  authorize(Role.Admin), usuarios.findAll);

// Obtiene un simple usuario por id
router.get("/:id",  authorize(Role.Admin), usuarios.findOne);

// Actualiza un usuario por id
router.put("/:id",  authorize(Role.Admin), usuarios.update);

// Inactiva un usuario por id
router.delete("/:id",  authorize(Role.Admin), usuarios.disable);

module.exports = router;
