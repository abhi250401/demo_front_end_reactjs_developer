import React from 'react';
import Drawerleft from "./drawerleft"
import "./Navbar.css"
function navbar() {
    return (
        <div className="navbar">
            <div className="icon">
                <Drawerleft />
            </div>
            <div className="image">
                <img src="https://images.yourstory.com/cs/images/companies/Inshorts-1596625208937.png" alt="logo" height="70"></img>
            </div>
        </div>
    );
};
export default navbar;