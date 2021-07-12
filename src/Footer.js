import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <span className="name">
                Made by -{" "}
                <a className="foot-link" href="#" target="__blank">
                    Abhishek Rai        </a>
            </span>
            <hr style={{ width: "90%" }} />
            <div className="iconContainer">
                <a className="foot-link" href="https://www.instagram.com/abhishekraiop/" target="__blank">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a className="foot-link" href="https://www.linkedin.com/in/abhishek-rai-889799168/" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>

            </div>
        </div>
    );
};

export default Footer;