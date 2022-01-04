import express from "express";
import morgan from "morgan";
import multer from "multer";
const path = require('path')
var bodyParser = require('body-parser')
import upload from "./middleware/storage.middleware";
//routers links
import mangas from "./routers/mangas"
import mangasChapter from "./routers/mangaChapters";
//initializations
let app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
let storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/img'),
    filename: (require, file, cb)=>{
        cb(null,file.originalname);
    }
});

//routers
app.use(mangas);
app.use(mangasChapter);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start
app.listen(app.get('port'),() => {
    console.log(`Server on port ${app.get('port')}`)
});