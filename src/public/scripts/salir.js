const salir = document.getElementById("salir");
salir.addEventListener("click", (event) => {
  console.log("click");
  window.electronAPI.salir();
});
