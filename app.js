import express from "express";
import dotenv from "dotenv";
import muh from "./database.js";

dotenv.config();
muh()
const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/about', (req,res) => {
    res.render('about');
});

app.get('/', (req,res) => {
    res.render('index');
});

app.get('/bird', (req,res) => {
    res.render('bird');
});

app.get('/contact', (req,res) => {
    res.render('contact');
});


app.listen(port, () => {
    console.log(`running on port: ${port}`);
})