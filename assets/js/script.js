// Creamos la clase Padre
class Multimedia {
    constructor(url) {
        this._url = url
    };
    get url () {
        return this._url
    };
    setInicio() {
        return 'Este mètodo es para realizar un cambio de la URL del video';
    };
};
//Creamos la clase Hijo
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = id;
    };
    get id() {
        return this._id
    }
    playMultimedia() {
        modulo.agregarVideoPublic(this._url, this._id)
    };
    setIncio(tiempo) {
        this.id.setAtribute("src", `${this.url}?start=${tiempo}`);
    };
};

// Implementar el Patrón de Modulo IIFE
let modulo = (() => {
    let agregarVideoPrivate = (url, id) => {
        let element = document.getElementById(id) //me traigo el elemento IIFE con el id
        element.setAtribute("src", url) //cuando ejercute la función privada me cambia la url
        // para hacer la función publica debe estar dentro del return
        
    };

    return {
            agregarVideoPublic: (url, id) => {
                agregarVideoPrivate(url, id)
            }
        }
})();

//Instanciar 

let pelicula = new Reproductor("https://www.youtube.com/embed/kxyyKU8rgaU?si=xenTR18dYOGcV6sk", "peliculas");

let serie = new Reproductor("https://www.youtube.com/embed/FaDFty5ipEg?si=0Lc5gcAJ39-dDBbO" , "series")

let musica = new Reproductor("https://www.youtube.com/embed/ADGFuE7T8Qc?si=H3tclzAj15k8MI_h" , "musica")

// Llamamos al método

pelicula.playMultimedia();
serie.playMultimedia();
musica.playMultimedia();

//Llamar al metodo setinicio

pelicula.setIncio(10);
serie.setIncio(5);
musica.setIncio(3)