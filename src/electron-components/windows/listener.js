const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printVehiculo: (vehiculo) => ipcRenderer.send("print-vehiculo", vehiculo),

  saveVehiculo: (vehiculo) => ipcRenderer.send("save-vehiculo", vehiculo),

  salir: () => ipcRenderer.send("salir"),

  eventoMisVehiculos: () => ipcRenderer.send("misVehiculos"),

  misVehiculos: (callback) => ipcRenderer.on("send-vehiculos", callback),

  sendVehiculoMain: (vehiculo) => ipcRenderer.send('pasar-vehiculo-main', vehiculo),

  sendVehiculoRender: (callBack) => ipcRenderer.on('pasar-vehiculo-render', callBack)

});
