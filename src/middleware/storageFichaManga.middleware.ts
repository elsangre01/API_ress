import multer from "multer";
import path from 'path';
import fs from 'fs';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const ruta:string = req.body.tituloPrincipal.trim();
        const dir = path.resolve(path.join(__dirname),"../public/img/"+ruta.replace(/ /g,"_"));
        fs.mkdir(dir, function(err) {
            if (err) {
              console.log(err)
            } else {
              console.log("New directory successfully created.")
            }
          })
       cb(null,path.resolve(dir));
       console.log(file);
    },

    filename: function (req, file, cb) {
        const ruta:string = req.body.tituloPrincipal.trim();
        cb(null, ruta.replace(/ /g,"_")+path.extname(file.originalname));
    }
});
const uploadFichaManga = multer({storage});
export default uploadFichaManga;