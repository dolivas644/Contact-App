import React from "react";
import ContactList from "./contacts/contactList";
import ViewContact from "./contacts/ViewContact";
import App from "../App.css";
import AddContact from "./contacts/AddContact";
import { useState } from "react";

const Home = () => {
    const [userToDisplay, setUserToDisplay] = useState();
    return(
<>
    <div className="App">
      {userToDisplay ? (
        <ViewContact user={userToDisplay} setUserToDisplay={setUserToDisplay} />
      ) : (
        <ContactList setUserToDisplay={setUserToDisplay} />
      )}

    </div>

</>
    );
}
export default Home;