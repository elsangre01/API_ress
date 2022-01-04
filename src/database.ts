import mongoose  from "mongoose";

mongoose.connect('mongodb+srv://destro:Mc7eERDUydkLqU3L@cluster0.c0v5g.mongodb.net/manga?retryWrites=true&w=majority')
.then(db => console.log("DB is connected..."))
.catch(err => console.log(err));