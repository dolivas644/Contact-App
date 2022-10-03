//This page will display the contacts in my database
import React, { useEffect } from "react";
import { useState } from "react";

const ContactList = () =>{
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
<header>List of Contacts</header>
<table>
    <tbody>
        {contacts.map((contact, index) =>{
            return(
                <tr key={index}>
                    <td><button>{contact.name}</button></td>
                </tr>
            )
        })}
    </tbody>
</table>
</>
    );
}
export default ContactList;