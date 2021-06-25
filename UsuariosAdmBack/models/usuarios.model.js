module.exports = (sequelize, Sequelize) => {
  const usuarios = sequelize.define("usuarios", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true, // Convierte en SERIAL postgres
      field: 'id'
    },
    pnombre: {
      type: Sequelize.STRING(80),
      allowNull: false,
      field: 'pnombre'
    },
    snombre: {
      type: Sequelize.STRING(80),
      allowNull: true,
      field: 'snombre'
    },
    papellid: {
      type: Sequelize.STRING(80),
      allowNull: false,
      field: 'papellid'
    },
    sapellid: {
      type: Sequelize.STRING(80),
      allowNull: true,
      field: 'sapellid'
    },
    cargo: {
      type:  Sequelize.STRING(2000),
      allowNull: true,
      field: 'cargo'
    },
    fechaingreso: {
      type: Sequelize.DATEONLY,
      allowNull: false,
      field: 'fechaingreso'
    },
    salario: {
      type: Sequelize.DECIMAL(15,2),
      allowNull: false,
      field: 'salario'
    },
    activo: {
      type: Sequelize.BOOLEAN,
      field: 'activo',
      defaultValue: true,
    },
  });

  return usuarios;
};
