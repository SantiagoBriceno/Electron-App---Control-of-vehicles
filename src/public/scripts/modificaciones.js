const listado = document.getElementById('listado');
const cuerpo = document.createElement('tbody');

window.electronAPI.needModificaciones();
window.electronAPI.sendModificaciones((event, data) => {
    for(let i of data){
        let fila = document.createElement('tr');
        fila.className = 'select';

        let dato = document.createElement('td');
        dato.innerText = i.placa;
        fila.appendChild(dato);

        let dia = i.fecha.getDate();
        let mes = i.fecha.getMonth();
        let ano = i.fecha.getFullYear();

        dato = document.createElement('td');
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

        cuerpo.appendChild(fila)


    }

    listado.appendChild(cuerpo);
    console.log(data);
});