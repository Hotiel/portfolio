import express from 'express';
import dotenv from "dotenv";
import mongoose, { connect } from "mongoose";
import Counter from "./models/Counter.js";
import cors from "cors"

import { connectDB } from './db.js';

dotenv.config();

const app = express();

// app.use(cors());
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://portfolio-wine-three-d6cqr8gj8p.vercel.app",
        "https://leonardopolidori.com.ar",
        "https://www.leonardopolidori.com.ar"
    ]
}))

connectDB();

app.get("/test", (req, res) => {
    res.json({
        message:"falopita"
    });
});

// app.get("/create-counter", async (req, res) => {
//     await Counter.create({
//         _id: "global",
//         clicks: 0
//     });

//     res.json({
//         message: "contador creado"
//     });
// });

app.patch("/counter", async (req, res) => {
    const counter = await Counter.findByIdAndUpdate(
        "global",
        { $inc: { clicks: 1 } },
        { returnDocument: "after" },
    );
    res.json(counter)
});

app.get("/counter", async (req, res) => {
    const counter = await Counter.findById(
        "global",
    );
    res.json(counter);
});

app.listen(5000, () =>{
    console.log("servidor corriendo");
});

