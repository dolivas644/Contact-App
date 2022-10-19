

import { useState, useEffect } from "react";
import AddContact from "./AddContact";
import ContactList from "./contactList";
import contact from "./contact.css"
// import contacts from "./component/contacts";

const ViewContact = ({ user, setUserToDisplay }) => {
    return (
        <>
            <button onClick={() => setUserToDisplay(undefined)}>Back</button>{" "}
            <div className="card">
                <div className="container">
                    <br></br>
                    <img src={user.image} alt="image0" height="30px" className="image"></img>
                    <h1>{user.name}</h1>
                    <h2>{user.phone_number}</h2>
                    <h3>{user.email}</h3>
                    <h4>{user.notes}</h4>
                </div>
            </div>
        </>
    );
};

export default ViewContact;