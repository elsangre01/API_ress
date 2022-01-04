import { Router } from "express"
import { Request, Response } from "express";
import path from 'path';
import Manga from "../models/manga";

/**proceso de registro de ficha descriptiva del manga */
export const saveFichaManga = async (req: Request, res: Response) => {
    var patt = new RegExp('^[a-zA-Z0-9 ]+$', 'g');


    const titulomanga = await Manga.findOne({ tituloPrincipal: req.body.tituloPrincipal });
    if (titulomanga) {
        return res.status(400).json(
            { error: 'Este manga ya se encuentra resgistrado...' }
        )
    }

    if (!req.body.tituloPrincipal) {
        return res.status(400).json(
            { error: 'falta el titulo del manga...' }
        )
    }
    if (!patt.exec(req.body.sentidoLectura)) {
        return res.status(400).json(
            { error: 'indique el sentido de la lectura...' }
        )
    }


    let manga = new Manga();
    manga.tituloPrincipal = req.body.tituloPrincipal;
    const ext:any = req.file?.originalname;
    const ruta:string = req.body.tituloPrincipal.trim();
    ruta.replace(/ /g,"_")
    manga.Imagen = 'public/img/'+ ruta.replace(/ /g,"_")+'/'+ruta.replace(/ /g,"_")+path.extname(ext);
    manga.description = req.body.description;
    manga.demografia = req.body.demografia;
    manga.amateur = req.body.amateur;
    manga.erotico = req.body.erotico;
    manga.fechaestreno = req.body.fechaestreno;
    manga.webComic = req.body.webComic;
    manga.yonkama = req.body.yonkama;
    manga.sentidoLectura = req.body.sentidoLectura;
    manga.hentai = req.body.hentai;
    manga.generos = req.body.generos;



    try {
        await manga.save();
        res.json({
            error: null,
            data: manga
        });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}

/**proceso dde busqueda de todas las fichas registradas **/

export const getFichaByID = async (req: Request, res: Response) => {
    const { idFichaManga } = req.params;

    try {
        const fichasMangas = await Manga.findById(idFichaManga);
        if (!fichasMangas) {
            return res.status(400).json({
                error: "no se ha encontrado ninguna ficha..."
            });
        }
        res.json({
            error: null,
            fichasMangas
        });
    }
    catch (error) {
        res.status(400).json({ error, errro: "no se ha encontrado nunguna ficha" });
    }

}

/** proceso para buscar todas las fichas gurdadas */

export const getAllfichasMangas = async (req: Request, res: Response) => {
    try {
        const listaFichaMangas = await Manga.find({});
        res.json({
            error: null,
            listaFichaMangas
        });

    } catch (err) {
        res.status(400).json({
            err,
            error: "algo salio mal"
        });
    }
}

/** proceso de actualizqar una ficha de manga */

export const updateFichaManga = async (req: Request, res: Response) => {
    let body = req.body;

    const ext:any = req.file?.originalname;
    const ruta:string = req.body.tituloPrincipal.trim();
    ruta.replace(/ /g,"")
    Manga.findByIdAndUpdate(body._id, {
        tituloPrincipal: req.body.tituloPrincipal,
        Imagen: 'public/img/'+ ruta.replace(/ /g,"_")+'/'+ruta.replace(/ /g,"_")+path.extname(ext),
        description: req.body.description,
        demografia: req.body.demografia,
        amateur: req.body.amateur,
        erotico: req.body.erotico,
        fechaestreno: req.body.fechaestreno,
        webComic: req.body.webComic,
        yonkama: req.body.yonkama,
        sentidoLectura: req.body.sentidoLectura,
        hentai: req.body.hentai,
        generos: req.body.generos
    }, function (error: any, info: any) {
        if (error) {
            res.json({
                resultado: false,
                msg: 'No se pudo modificar el cliente',

            });
        } else {
            res.json({
                resultado: true,
                info: info
            })
        }
    }
    )
}
/** Proceso de eliminacion de fichas de mangas */
export const eliminarFichamanga = async (req: Request, res: Response) => {
    const { idFichaManga } = req.params;
    await Manga.findByIdAndDelete(idFichaManga);
    // code 200 is ok too
    res.status(204).json({
        data: 'se ha eliminado la ficha'
    });





}












