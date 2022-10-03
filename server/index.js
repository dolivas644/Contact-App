import express from "express";
import cors from 'cors';
import bodyparser from 'body-parser';

import contactsRouter from "./routes/contacts.js";

const app = express();

const PORT = 6444;

app.use(cors());
app.use(bodyparser.json());

app.use("/contacts", contactsRouter);

app.get('/', function(req,res){
    res.json("Working request");
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));