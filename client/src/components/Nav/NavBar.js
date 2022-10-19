import { Link } from "react-router-dom";
import React from "react";


const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/AddContact">Add Contact</Link>
            </div>
        </>
    );
};

export default NavBar;

