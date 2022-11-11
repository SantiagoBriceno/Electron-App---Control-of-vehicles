const { getConection } = require("../../database/database.js");
const { Notification } = require("electron");
const misVehiculos = async () => {
  try {
    const conn = await getConection();
    const result = await conn.query("SELECT * FROM vehiculo");

    for (let value of result) {
      console.log(
        `Placa: ${value.placa} Marca: ${value.marca} modelo: ${value.modelo}`
      );
    }
    
    return result;
  } catch (error) {
    console.log(error);
  }
};

const miVehiculo = async () =>{
  try {
    const conn = await getConection();
    placa = await conn.query('SELECT * FROM temporal');
    const result = await conn.query('SELECT * FROM vehiculo WHERE placa = ?', placa[0].placa);
    await conn.query('DELETE FROM temporal WHERE placa = ?', placa[0].placa)
    return result;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  misVehiculos,
  miVehiculo
};
