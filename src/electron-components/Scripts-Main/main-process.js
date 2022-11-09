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

    new Notification({
      title: "Electron APP",
      body: `Vehiculos registrados: `,
    }).show();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  misVehiculos,
};
