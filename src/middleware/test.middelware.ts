import multer from "multer";
import path from 'path';


const uploadFichaManga = function (req: { body: { tituloPrincipal: string; }; }, file: any, cb: (arg0: null, arg1: string) => void) {
    const ruta:string = req.body.tituloPrincipal.trim();
    console.log(ruta.replace(/ /g,"_"));
   cb(null,path.resolve(path.join(__dirname),"../public/img/5544"));

}


export default uploadFichaManga;