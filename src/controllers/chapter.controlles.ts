import { Router } from "express"
import { Request, Response } from "express";

import Chapters from "../models/chapters";

export const savechapter = async (req: Request, res: Response) => {
    const { idFichaManga } = req.params;

    //*const titulomanga = await Chapters.findOne({ tituloPrincipal: req.body.tituloPrincipal });*/
    const list: string[] = [];

    const jsonFiles = JSON.stringify(req.files);
    const parsedArrar = JSON.parse(jsonFiles);
    for (let index = 0; index < parsedArrar.length; index++) {
        console.log("public/img/" + parsedArrar[index].filename);
        list.push('public/img/' + req.body.nombreCapitulo+parsedArrar[index].filename);
    }
    let chapter = new Chapters();
    chapter.tituloPrincipal = req.body.tituloPrincipal;
    chapter.chapter = list;
    chapter.description = req.body.description;
    chapter.nombreCapitulo = idFichaManga;
    try {
        await chapter.save();
        res.json({
            error: null,
            data: chapter
        });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}
