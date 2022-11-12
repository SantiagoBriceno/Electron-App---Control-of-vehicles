const titulo = document.getElementById('titulo');
const listado = document.getElementById('listado');
const cuerpo = document.createElement('tbody');
let placa
window.electronAPI.needVehiculo();

window.electronAPI.vehiculoRender((event, data) => {
    placa = data[0].placa;
    titulo.innerText = `Vehiculo     ${data[0].marca}     ${data[0].modelo}     ${data[0].año}`

    window.electronAPI.needModificacionesDe(placa);

    window.electronAPI.sendModificacionesDe((event, data) => {
        for(let i of data){
            let fila = document.createElement('tr');
            let dato = document.createElement('td');

            let dia = i.fecha.getDate();
            let mes = i.fecha.getMonth();
            let ano = i.fecha.getFullYear();

            dato.innerText = `${dia}/${mes}/${ano}`;
            fila.appendChild(dato);

            dato = document.createElement('td');
            dato.innerText = i.costo;
            fila.appendChild(dato);

            dato = document.createElement('td');
            dato.innerText = i.tipo;
            fila.appendChild(dato);

            dia = i.proximaFecha.getDate();
            mes = i.proximaFecha.getMonth();
            ano = i.proximaFecha.getFullYear();

            dato = document.createElement('td');
            dato.innerText = `${dia}/${mes}/${ano}`;
            fila.appendChild(dato);

            dato = document.createElement('td');
            dato.innerText = i.descripcion;
            fila.appendChild(dato);

            cuerpo.appendChild(fila);
        }

        listado.appendChild(cuerpo);
        console.log(data);
    });
});

