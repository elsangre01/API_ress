import { Router } from "express"
import upload from "../middleware/storage.middleware";
//

const router = Router();
import {savechapter} from '../controllers/chapter.controlles';



/**ruta de guardado de la ficha del manga */
router.post('/capitulo/save/:idFichaManga',upload.array('chapter') ,savechapter);






export default router;