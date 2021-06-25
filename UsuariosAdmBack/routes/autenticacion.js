var express = require('express');
var router = express.Router();
const autenticacion = require("../controllers/autenticacion.controller.js");

// Trae todos los Usuarios ApiExtern
router.post("/", autenticacion.authenticate);

module.exports = router;
