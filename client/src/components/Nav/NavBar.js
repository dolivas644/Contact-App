import { Link } from "react-router-dom";
import React from "react";


const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/AddContact">Add Contact</Link>
                <input type="text" placeholder="Search for Contact . . . " className="searchBar" />
            </div>
        </>
    );
};

export default NavBar;

