const db = require("../models");
const Usuario = db.usuarios;
//const Op = db.Sequelize.Op;

// Obtener todos los usuarios activos
exports.findAll = (req, res) => {
    Usuario.findAll({
        where: {
            activo: true
        }, order: [
            ['id', 'ASC']
        ]
    })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrió un error al traer los usuarios."
            });
        });
};

// Buscar un simple usuario con id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Usuario.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error obteniendo usuario con id=" + id
            });
        });
};

// Crear y guardar un nuevo Usuario
exports.create = (req, res) => {
    // Valida el request
    if (!req.body.pnombre) {
        res.status(400).send({
            message: "El contenido no puede ser vacío!"
        });
        return;
    }

    // Guardar usuario en la tabla
    Usuario.create(req.body)
        .then(data => {
            res.send({
                codeError: 1, message: "Usuario fue creado con éxito.", usuario: data
            });
        })
        .catch(err => {
            res.status(500).send({
                codeError: -1, message: `Ocurrió un error al crear usuario con id=${id}. Verifique los datos.`
            });
        });
};


// Actualizar un usuario por id
exports.update = (req, res) => {
    const id = req.params.id;

    Usuario.update(req.body, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    codeError: 1, message: "Usuario fue actualizado con éxito.", usuario: req.body
                });
            } else {
                res.send({
                    codeError: -1, message: `no se pudo actualizar el usuario id=${id}. Verifique los datos.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                codeError: -1, message: `Ocurrió un error al actualizar usuario con id=${id}. Verifique los datos.`
            });
        });
};

// inactivar un usuario por un id específico
exports.disable = (req, res) => {
    const id = req.params.id;

    Usuario.update({activo: false}, {
        where: {id: id}
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    codeError: 1, message: "Usuario fue inactivado con éxito."
                });
            } else {
                res.send({
                    codeError: -2, message: `no se pudo inactivar el usuario con id=${id}. Verifique`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                codeError: -1, message: "Ocurrió un error al inactivar usuario con id=" + id
            });
        });
};
/*
// Eliminar un usuario por un id específico
exports.delete = (req, res) => {
  const id = req.params.id;

  Usuario.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Usuario fue eliminado satisfactoriamente!"
        });
      } else {
        res.send({
          message: `No se pudo eliminar el usuario con id=${id}. Puede que el usuario no exista. Verifique!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo eliminar el usuario con id=" + id
      });
    });
};
*/
