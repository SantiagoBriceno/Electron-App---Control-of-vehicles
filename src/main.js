/*MODULOS DE ELECTRON*/
const { app, Menu, ipcMain, Notification } = require("electron");
/*MODULO PATH, TRANSCRIPTOR DE RUTAS LOCALES*/
const path = require("path");
/*CONEXION CON DATABASE*/
const { getConection } = require("./database/database.js");
/*MENU TEMPLATE SELECCIONADO PARA LA APP*/
const {
  menuTemplate,
} = require("./electron-components/menuTemplate/menuTemplate.js");
/*CREACION DE LA VENTANA PRINCIPAL*/
const { createWindow } = require("./electron-components/windows/index.js");
/*MODULO QUE REFRESCA ELECTRON AL REALIZARSE MODIFICACIIONES EN INTERFAZ*/
require("electron-reload")(__dirname);
/*FUNCIONES IMPORTANTES DEL PROCESO MAIN CREADAS*/
const {
  misVehiculos, miVehiculo
} = require("./electron-components/Scripts-Main/main-process.js");

const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
  const principal = createWindow();

  //CREAMOS LISTENER
  ipcMain.on("print-vehiculo", (event, data) => {
    console.log(data);
    new Notification({
      title: "Electron APP",
      body: "Nuevo vehiculo añadido satisfactoriamente",
    }).show();
    // console.log(event);
  });

  ipcMain.on("save-vehiculo", async (event, data) => {
    try {
      const conn = await getConection();
      data.año = parseInt(data.año);
      const result = await conn.query("INSERT INTO vehiculo SET ?", data);
      console.log(result);

      new Notification({
        title: "Electron APP",
        body: `El nuevo vehiculo ${data.placa} ha sido añadido.`,
      }).show();
    } catch (error) {
      console.log(error);
    }
  });

  ipcMain.on("salir", () => {
    app.quit();
  });

  ipcMain.on("misVehiculos", async (event, data) => {
    const result = await misVehiculos();
    principal.webContents.send("send-vehiculos", result);
    // console.log(result);
  });

  ipcMain.on("pasar-placa-main", async (event, data) => {
    try {
      
      const conn = await getConection();
      const result = await conn.query(`INSERT INTO temporal (placa) VALUES (?)`, data);
      console.log("placa: ", data);

    } catch (error) {
      console.log(error);
    }    
  });

  ipcMain.on('need-vehiculo', async (event, data) => {
    try {
      
      const vehiculo = await miVehiculo();
      principal.webContents.send('pasar-vehiculo-render', vehiculo);
    } catch (error) {
      console.log('error');
    }
  });
  

  

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
