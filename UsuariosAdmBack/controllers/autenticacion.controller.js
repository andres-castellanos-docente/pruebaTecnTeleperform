const Role = require("../_helpers/role");
const jwt = require('jsonwebtoken');
const config = require('../_helpers/config.json');
const db = require("../models");
const Usuario = db.usuarios;

// Autenticar Usuario
exports.authenticate = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    var b = new Buffer(req.body.password);
    var passenc = b.toString('base64');

    Usuario.findAll({
        where: {
            username: req.body.username, password: passenc, activo: true
        }
    })
        .then(data => {
            let roluser;
            if (data.length > 0) {
                if (data[0].esadmin)
                {
                    roluser = Role.Admin
                }else {
                    roluser = Role.User
                }
                const token = jwt.sign({ sub: data[0].id , role: roluser }, config.secret, {
                    expiresIn:  config.expiresIn,
                } );
                res.send({
                    user: { pnombre: data[0].pnombre +  data[0].papellid},
                    token, role: roluser
                });
            }
            else {
                res.send({
                    message: 'Usuario y/o Password Incorrecto'
                });
            }



        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al traer el usuario."
            });
        });


};
