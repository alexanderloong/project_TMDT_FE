import header from "../Picture/header.png";
import logo from "../Picture/logo.png";
import slogan from "../Picture/slogan.png"
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <div className="text-header">
                <img src={header} className="img-header" alt="header" />
                <div className="centered ">
                    <img src={slogan} className="img-header" alt="slogan" />
                </div>
                <div className="top-left">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
