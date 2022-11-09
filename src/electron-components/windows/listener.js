const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printVehiculo: (vehiculo) => ipcRenderer.send("print-vehiculo", vehiculo),

  saveVehiculo: (vehiculo) => ipcRenderer.send("save-vehiculo", vehiculo),

  salir: () => ipcRenderer.send("salir"),

  eventoMisVehiculos: () => ipcRenderer.send("misVehiculos"),

  misVehiculos: (callback) => ipcRenderer.on("send-vehiculos", callback),
});
