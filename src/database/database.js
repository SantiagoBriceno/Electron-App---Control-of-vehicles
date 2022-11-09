const mysql = require("promise-mysql");

const conection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vehiculos",
});

const getConection = () => conection;
console.log("conexion establecida con la base de datos");

module.exports = { getConection };
