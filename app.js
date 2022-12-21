import express from "express";
import { ErrorHandler } from "./middleware/error.js";
import { connectDB } from "./config/connectDB.js";
import router from "./routes/product.js";
import bodyParser from "body-parser";

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)



app.use(express.json())

connectDB();



app.listen(5000, () => {
    console.log(`Connected Successfully http://localhost:5000/`)
})
// app.use((msg, req, res, next) => {
//     console.log(msg.message)
//     next()
// })
app.use(ErrorHandler)