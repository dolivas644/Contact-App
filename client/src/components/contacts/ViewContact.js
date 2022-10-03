//This page will display the contacts in my database
import React, { useEffect } from "react";
import { useState } from "react";

const ViewContact = () =>{
    const[contacts, setContacts]= useState([]);
    //get request to get contacts table
    const getContacts = async () =>{
        const response = await fetch(
            `http://localhost:6444/contacts`
        );
        const contact = await response.json();
        console.log(contact);
        setContacts(contact);
    }

    useEffect(() =>{
        getContacts();
    }, []);

    return(
<>
<div className="card">
    {contacts.map((contact, index) =>{
        return(
            <div className="container">
                <img src={contact.image} alt="image" height="30px"></img>
                <h1>{contact.name}</h1>
                <h2>{contact.phone_number}</h2>
                <h2>{contact.email}</h2>
                <h2>{contact.notes}</h2>
            </div>
        )
    })}
</div>
</>
    );
}
export default ViewContact;