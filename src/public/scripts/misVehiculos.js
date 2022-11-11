const action = document.getElementById("action");
const listado = document.getElementById("listado");

window.electronAPI.eventoMisVehiculos();

window.electronAPI.misVehiculos((event, data) => {
  const result = data;
  for (let i of data) {
    console.log(`
        Placa: ${i.placa} 
        Marca: ${i.marca} 
        Modelo:${i.modelo}`);
  }

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
    const image = document.createElement('img');
    image.id = 'mas';
    image.setAttribute('src', '../assets/img/mas.png');
    
    datos.innerHTML = `<a href = #><i class='bx bx-plus-circle'></i></a>`;
    fila.appendChild(datos);

    cuerpoTabla.appendChild(fila);
  }

  listado.appendChild(cuerpoTabla);

});


