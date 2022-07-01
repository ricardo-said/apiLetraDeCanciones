import * as UI from './interfaz.js';
 
class API {
    constructor(artista, cancion){
        this.artista = artista;
        this.cancion = cancion;
    }

    consultaAPI(){
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {

            if (resultado.lyrics) {
                const {lyrics}=resultado;

            UI.divResulrado.textContent = lyrics;
            UI.headingResultado.textContent = `Lentra de la cancion: ${this.cancion} del artista: ${this.artista}`;
            }
            else{
                UI.divMensaje.textContent ='Cancion no encontrada, puebra con otra cancion'
                UI.divMensaje.classList.add('error');
                setTimeout(() => {
                    UI.divMensaje.textContent =''
                    UI.divMensaje.classList.remove('error');
                }, 3000);
            }
            
        })
    }

}

export default API;