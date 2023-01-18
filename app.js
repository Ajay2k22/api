import express from "express";

import { connectDB } from "./config/connectDB.js";
import hotel from "./routes/hotel.js";

import bodyParser from "body-parser";
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())




app.use(express.json())

app.use(hotel)
connectDB();



app.listen(5000, () => {
    console.log(`Connected Successfully http://localhost:5000/`)
})
// app.use((msg, req, res, next) => {
//     console.log(msg.message)
//     next()
// })
