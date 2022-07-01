import * as UI from './interfaz.js';
import API from './api.js';

UI.formularioBuscar.addEventListener('submit', buscarCancion);


function buscarCancion(e){
    e.preventDefault();

    // obtener datos de artista y de cancion

    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;


    // validacion de formulario
    if (artista === '' || cancion === '') {
        UI.divMensaje.textContent='Todos los campos son obligatorios';
        UI.divMensaje.classList.add('error');
        setTimeout(() => {
            UI.divMensaje.textContent = '';
            UI.divMensaje.classList.remove('error');
        }, 3000);
        return;
    }

    const busqueda = new API (artista, cancion);
    busqueda.consultaAPI();
}