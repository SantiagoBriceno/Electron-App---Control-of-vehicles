const { BrowserWindow } = require("electron");
const path = require("path");
const registerWindow = async () => {
  const principal = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "listener.js"),
    },
  });
  principal.webContents.openDevTools();
  principal.loadFile("src/public/views/pag2.html");
};

module.exports = { registerWindow };
