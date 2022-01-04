import { Schema, model } from 'mongoose';

const capituloShema = new Schema({
    tituloPrincipal: { type: String },
    chapter: { type: Object },
    nombreCapitulo : { type: String },
    created_at: { type: Date, default: Date.now() }
});


export default model('capitulo', capituloShema);