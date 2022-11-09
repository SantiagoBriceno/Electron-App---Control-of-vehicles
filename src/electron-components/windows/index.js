const { BrowserWindow, ipcMain } = require("electron");
const { misVehiculos } = require("../Scripts-Main/main-process.js");
const path = require("path");
const createWindow = () => {
  const principal = new BrowserWindow({
    width: 1400,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "listener.js"),
    },
  });

  principal.webContents.openDevTools();
  principal.loadFile("src/public/views/index.html");
  return principal;
};

module.exports = { createWindow };
