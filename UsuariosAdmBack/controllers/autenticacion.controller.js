const Role = require("../_helpers/role");
const jwt = require('jsonwebtoken');
const config = require('../_helpers/config.json');
const users = [
    { username: 'admin', password: 'admin', firstName: 'Admin', lastName: 'User', role: Role.Admin },
    { username: 'user', password: 'user', firstName: 'Normal', lastName: 'User', role: Role.User }
];

// Autenticar Usuario
exports.authenticate = (req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id, role: user.role }, config.secret, {
            expiresIn:  config.expiresIn,
        } );
        const { password, ...userWithoutPassword } = user;
        res.send({
            ...userWithoutPassword,
            token
        });
    }
    else {
        res.send({
            message: 'Usuario y/o Password Incorrecto'
        });
    }
};
