const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printVehiculo: (vehiculo) => ipcRenderer.send("print-vehiculo", vehiculo),

  saveVehiculo: (vehiculo) => ipcRenderer.send("save-vehiculo", vehiculo),

  salir: () => ipcRenderer.send("salir"),

  eventoMisVehiculos: () => ipcRenderer.send("misVehiculos"),

  misVehiculos: (callback) => ipcRenderer.on("send-vehiculos", callback),

  sendPlacaMain: (placa) => ipcRenderer.send("pasar-placa-main", placa),

  needVehiculo: () => ipcRenderer.send('need-vehiculo'),

  vehiculoRender: (callback) => ipcRenderer.on("pasar-vehiculo-render", callback)

});
