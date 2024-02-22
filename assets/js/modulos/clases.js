class Multimedia {
    constructor(url) {
        this.url = url
    };
    get url () {
        return this.url
    };
    setInicio(nuevaUrl) {
        this.url = nuevaUrl;
    };
};

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        this._id = id;
    };
    playMultimedia() {
        
    };
    setIncio(nuevoId) {
        this._id = nuevoId
    };
    
};