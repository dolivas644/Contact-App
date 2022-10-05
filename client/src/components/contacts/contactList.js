//This page will display the contacts in my database
import React, { useEffect } from "react";
import { useState } from "react";
import AddContact from "./AddContact";
import ViewContact from "./ViewContact";
import contact from "./contact.css"

const ContactList = ({ setUserToDisplay }) => {

    const [contacts, setContacts] = useState([]);
    //get request to get contacts table
    const getContacts = async () => {
        const response = await fetch(
            `http://localhost:6444/contacts`
        );
        const contact = await response.json();
        console.log(contact);
        setContacts(contact);
    }

    useEffect(() => {
        getContacts();
    }, []);

    //delete individual handler
    const handleDeleteContact = async (deleteId) => {
        //
        const response = await fetch(`http://localhost:6444/contacts/${deleteId}`, {
            method: "DELETE",
        });
        await response.json();
        const deleteContactFunction = contacts.filter(
            (contact) => contact.id !== deleteId
        );
        setContacts(deleteContactFunction);
    };

    return (
        <>
            <header>List of Contacts</header>
            <div className="card">
                {contacts.map((contact, index) => {
                    return (
                        <div className="container">
                            <div className="contactIndividual">
                                <br></br>
                                <img src={contact.image} alt="img" className="image"></img>
                                <h1 onClick={() => setUserToDisplay(contact)}>{contact.name}</h1>

                                <button onClick={() => handleDeleteContact(contact.id)}>Delete</button>
                                <button>Edit</button>
                                <br></br>
                            </div>
                            <br></br>
                        </div>


                    )
                })}
            </div>
        </>
    );
}
export default ContactList;