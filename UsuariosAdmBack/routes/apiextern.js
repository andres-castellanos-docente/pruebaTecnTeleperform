var express = require('express');
var router = express.Router();
const apiextern = require("../controllers/apiextern.controller.js");
const Role = require("../_helpers/role");
const authorize = require("../_helpers/authorize");

// Trae todos los Usuarios ApiExtern, solo el rol user tiene acceso
router.get("/", authorize(Role.User), apiextern.getAllUsersExt);

module.exports = router;
