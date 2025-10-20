import express from 'express';
import cors from "cors";
import mongoose from "mongoose"
import "dotenv/config";

import routes from './routes.js';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express()

//setup mongoose
try {
    await mongoose.connect("mongodb://localhost:27017", {
        dbName: "furniture-sept-2025"
    })

    console.log("Connected to db");
    
} catch (err) {
    console.error("Cannot connect to db");
    console.error(err);
    
}

app.use(cors());

//add json parser
app.use(express.json())

app.use(authMiddleware)

app.use(routes)

app.listen(3030, () => console.log("Server is listening on http://localhost:3030..."))

