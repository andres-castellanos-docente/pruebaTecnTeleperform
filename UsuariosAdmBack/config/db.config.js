module.exports = {
  host: "localhost",
  user: "usrprueba",
  password: "12345678",
  port: "5432",
  db: "pruebateleperf",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
};
