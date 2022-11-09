const action = document.getElementById("action");

action.addEventListener("click", (event) => {
  window.electronAPI.eventoMisVehiculos();

  window.electronAPI.misVehiculos((event, data) => {
    const result = data;
    for (let i of data) {
      console.log(`
        Placa: ${i.placa} 
        Marca: ${i.marca} 
        Modelo:${i.modelo}`);
    }
  });
});
