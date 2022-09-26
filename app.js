import express from "express";
import dotenv from "dotenv";
import muh from "./database.js";

dotenv.config();
muh()
const app = express();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`running on port: ${port}`);
})