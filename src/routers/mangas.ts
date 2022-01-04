import { Router } from "express"


//controller
import {saveFichaManga} from '../controllers/mangas.controlles';
import {getFichaByID} from '../controllers/mangas.controlles';
import {getAllfichasMangas} from '../controllers/mangas.controlles';
import {updateFichaManga} from '../controllers/mangas.controlles';
import {eliminarFichamanga} from '../controllers/mangas.controlles';

import upload from "../middleware/storageFichaManga.middleware";

const router = Router();
/**ruta de guardado de la ficha del manga */
router.post('/mangas/save',upload.single('image'),saveFichaManga);

//*ruta buscar lista de todas las fichas de mangas registrados */
router.get('/mangas/getficha/:idFichaManga', getFichaByID);

//*ruta buscar todas las fichas existentes*/
router.get('/mangas/getallfichas',getAllfichasMangas);

//*ruta actualizar los datpos de alguna ficha en espesifico**/
router.put('/mangas/updatefichamanga',updateFichaManga);

/**ruta eliminar alguna ficha de manga */
router.delete('/mangas/deletefichamanga/:idFichaManga',eliminarFichamanga );



export default router;