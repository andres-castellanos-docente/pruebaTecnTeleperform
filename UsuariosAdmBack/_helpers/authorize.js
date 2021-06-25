const jwt = require('express-jwt');
const { secret } = require('./config');

module.exports = authorize;

function authorize(roles = []) {
    // roles param. puede ser un simple Rol (e.j. Role.User o 'User')
    // o un arreglo de roles (e.j. [Role.Admin, Role.User] o ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    return [
        // Autentica JWT token y adiciona el usuario al request
        jwt({ secret, algorithms: ['HS256'] }),

        // Autoriza basado en el Rol
        (req, res, next) => {
            if (roles.length && !roles.includes(req.user.role)) {
                // Rol de usuario no autorizado
                return res.status(401).json({ message: 'Unauthorized' });
            }

            // Autenticación y Autorización satisfactoria
            next();
        }
    ];
}
