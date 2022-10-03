import React from "react";
import ContactList from "./contacts/contactList";
import ViewContact from "./contacts/ViewContact";
import App from "../App.css";

const Home = () => {
    return(
<>
<div class="box">
    <div className="column left">
        <ContactList />
    </div>
    <div className="column right">
<ViewContact />
    </div>
</div>
</>
    );
}
export default Home;