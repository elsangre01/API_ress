import { Schema, model } from 'mongoose';

const mangaSchema = new Schema({
    tituloPrincipal: {type: String},
    Imagen: {type: String},
    description: {type: String},
    demografia: {type: String},
    amateur: {type: String},
    erotico: {type: String},
    fechaestreno: {type: Date},
    webComic: {type: String},
    yonkama: {type: String},
    sentidoLectura: {type: String},
    hentai: {type: String},
    generos: {type: String},
    created_at: {type: Date, default: Date.now()}
});


 export default model('fichasManga', mangaSchema);