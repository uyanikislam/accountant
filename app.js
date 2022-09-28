import express from "express";
import dotenv from "dotenv";
import muh from "./database.js";
import pageRoute from "./routes/pageRoute.js";
import cariRoute from "./routes/cariRoute.js";

dotenv.config();
muh()
const app = express();
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.json());

app.use("/", pageRoute );
app.use('/bird', cariRoute);


app.listen(port, () => {
    console.log(`running on port: ${port}`);
})