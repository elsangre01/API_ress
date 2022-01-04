import multer from "multer";
import path from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const { idFichaManga } = req.params;
        console.log(req.body);
        const ruta:string = req.body.tituloPrincipal.trim();
        const dir = path.resolve(path.join(__dirname),"../public/img/"+ruta.replace(/ /g,"_")+"/"+idFichaManga);
        fs.mkdir(dir, function(err) {
            if (err) {
             // console.log(err)
            } else {
            //  console.log("New directory successfully created.")
            }
          })
       cb(null,path.resolve(dir));

    },

    filename: function (req, file, cb) {
        const ruta:string = req.body.tituloPrincipal.trim();
        cb(null, ruta.replace(/ /g,"_")+file.originalname);
    }
});
const upload = multer({storage});

export default upload;