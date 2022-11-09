const { app, shell, BrowserWindow } = require("electron");
const { registerWindow } = require("../windows/registro.js");

const menuTemplate = [
  {
    label: "Opciones",
    submenu: [
      {
        label: "Registrar vehiculos",
        click: () => {
          registerWindow();
        },
      },
      {
        label: "Ver mis vehiculos registrados",
      },
    ],
  },
];

exports.menuTemplate = menuTemplate;
