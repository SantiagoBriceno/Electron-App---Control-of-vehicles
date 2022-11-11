const action = document.getElementById("action");
const listado = document.getElementById("listado");

window.electronAPI.eventoMisVehiculos();

window.electronAPI.misVehiculos((event, data) => {
  const result = data;

  let cuerpoTabla = document.createElement('tbody');

  for(let elem of data){
    let fila = document.createElement('tr');
    fila.className = 'select';
    //AÑADIMOS PLACA
    let datos = document.createElement('td');
    datos.innerText = elem.placa;
    fila.appendChild(datos);

    //AÑADIMOS MARCA
    datos = document.createElement('td');
    datos.innerText = elem.marca;
    fila.appendChild(datos);

    //AÑADIMOS COMBUSTIBLE
    datos = document.createElement('td');
    datos.innerText = elem.combustible;
    fila.appendChild(datos);

    //AÑADIMOS MODELO
    datos = document.createElement('td');
    datos.innerText = elem.modelo;
    fila.appendChild(datos);

    //AÑADIMOS AÑO
    datos = document.createElement('td');
    datos.innerText = elem.año;
    fila.appendChild(datos);

    //añadimos logo de añadir modificación
    datos = document.createElement('td');

    //añadimos un evento, si da click pasa el dato de la fila. 
    datos.addEventListener(('click'), (event) => {
      window.electronAPI.sendVehiculoMain(elem);
    });

    
    datos.innerHTML = `<a href = 'pag4.html'><i class='bx bx-plus-circle'></i></a>`;
    fila.appendChild(datos);

    cuerpoTabla.appendChild(fila);
  }

  listado.appendChild(cuerpoTabla);

});


