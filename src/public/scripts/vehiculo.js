const placa = document.getElementById("placa");
const marca = document.getElementById("marca");
const año = document.getElementById("año");
const modelo = document.getElementById("modelo");
const combustible = document.getElementById("combustible");

const formVehiculo = document.getElementById("formVehiculo");

formVehiculo.addEventListener("submit", (event) => {
  // event.preventDefault();

  const vehiculo = {
    placa: placa.value,
    marca: marca.value,
    año: año.value,
    modelo: modelo.value,
    combustible: combustible.value,
  };

  console.log(vehiculo);
  // window.electronAPI.printVehiculo(vehiculo);
  window.electronAPI.saveVehiculo(vehiculo);
});
