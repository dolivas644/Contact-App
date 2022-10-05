import db from "../db/DBConnection.js";
import express from "express";
const router = express.Router();
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

//get request from query 
router.get('/', async function (req, res) {
    try{
        const contacts = await db.any('SELECT * FROM contacts ORDER BY id', [true]);
        res.send(contacts);
    }catch(e){
        console.log(e);
        return res.status(400).json({e});
    }
    
});

//post request
router.post('/', async (req, res) => {
    const contacts = {
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      phone_number: req.body.phone_number,
      contact_id: req.body.contact_id,
      notes: req.body.notes,
      image: req.body.image,
    }
    console.log(contacts);
    try {
      const createdContacts = await db.one(
        `INSERT INTO contacts(id, name, email, phone_number, contact_id, notes, image) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [contacts.id, contacts.name, contacts.email, contacts.phone_number, contacts.contact_id, contacts.notes, contacts.image]
      );
      console.log(req.body);
      res.send(createdContacts);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ e });
    }
  });

  router.delete("/:id", async (req, res) => {
  
    const contactsId = req.params.id;
    try {
      await db.none("DELETE FROM Contacts WHERE id=$1", [contactsId]);
      res.send({ status: "sucess" });
    } catch (e) {
      
      return res.status(500).json({ e });
    }
  });

export default router;